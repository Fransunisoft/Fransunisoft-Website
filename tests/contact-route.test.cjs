const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

// Load the actual route and shared validator without starting Next.js or calling providers.
function loadTs(relativePath) {
  const filename = path.resolve(relativePath);
  const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText;
  const loaded = { exports: {} };
  const localRequire = (id) => id.startsWith('@/') ? loadTs(`${id.slice(2)}.ts`) : require(id);
  new Function('require', 'module', 'exports', code)(localRequire, loaded, loaded.exports);
  return loaded.exports;
}
const { POST } = loadTs('app/api/contact/route.ts');
const { serviceTypeOptions } = loadTs('app/components/fsx-consulting/consulting-data.ts');
const fields = { firstName: 'Test', lastName: 'Contact', email: 'test@example.com', phone: '+234 1234567890', serviceType: serviceTypeOptions[0], company: '', message: 'This is a mocked contact submission.' };

async function submit(t, emailResponse, sheetResponse, overrides = {}) {
  const originalEnv = { ...process.env };
  process.env.NEXT_PUBLIC_FORMLY_ACCESS_KEY = 'test-formly-key';
  delete process.env.FORMLY_ACCESS_KEY;
  process.env.GOOGLE_CRM_WEBHOOK_URL = 'https://example.com/mock-apps-script';
  process.env.GOOGLE_CRM_API_KEY = 'test-crm-key';
  t.after(() => { process.env = originalEnv; });
  t.mock.method(console, 'error', () => {});
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    calls.push({ url, options });
    const response = url === 'https://formly.email/submit' ? emailResponse : sheetResponse;
    if (response instanceof Error) throw response;
    return response;
  });
  const form = new FormData();
  Object.entries({ ...fields, ...overrides }).forEach(([key, value]) => form.set(key, value));
  form.set('attachment', new File(['attachment content'], 'brief.txt', { type: 'text/plain' }));
  const response = await POST(new Request('http://localhost/api/contact', { method: 'POST', body: form }));
  return { status: response.status, result: await response.json(), calls };
}

test('Formly thank-you redirect succeeds and the same enquiry reaches Apps Script', async (t) => {
  const { result, calls } = await submit(t, new Response(null, { status: 302, headers: { Location: '/thank-you' } }), Response.json({ success: true, leadId: 'lead-1' }));
  assert.equal(result.emailSent, true);
  assert.equal(result.sheetSaved, true);
  assert.equal(result.partial, false);
  assert.equal(result.leadId, 'lead-1');
  const email = calls.find(({ url }) => url.includes('formly'));
  assert.equal(email.options.redirect, 'manual');
  assert.equal(email.options.body.get('attachment').name, 'brief.txt');
  const crm = calls.find(({ url }) => url.includes('mock-apps-script'));
  assert.equal(crm.options.redirect, 'follow');
  assert.deepEqual(JSON.parse(crm.options.body), { ...fields, phone: '+2341234567890', phoneNumber: '+2341234567890', apiKey: 'test-crm-key' });
  assert.equal(JSON.stringify(result).includes('test-crm-key'), false);
});

test('JSON success is accepted', async (t) => {
  const { result } = await submit(t, Response.json({ success: true }), Response.json({ success: true }));
  assert.equal(result.success, true);
  assert.equal(result.partial, false);
});

test('email success is retained when Apps Script rejects the enquiry', async (t) => {
  const { result } = await submit(t, Response.json({ success: true }), Response.json({ success: false }));
  assert.equal(result.success, true);
  assert.equal(result.emailSent, true);
  assert.equal(result.sheetSaved, false);
  assert.equal(result.partial, true);
});

test('sheet still receives the enquiry when Formly fails', async (t) => {
  const { result } = await submit(t, new Error('Network failure'), Response.json({ success: true }));
  assert.equal(result.success, true);
  assert.equal(result.emailSent, false);
  assert.equal(result.sheetSaved, true);
});

test('unexpected redirect and HTML login page do not count as success', async (t) => {
  const { status, result } = await submit(t, new Response(null, { status: 302, headers: { Location: '/error' } }), new Response('<html>Sign in</html>'));
  assert.equal(status, 502);
  assert.equal(result.success, false);
});

test('invalid fields are rejected before calling either provider', async (t) => {
  const { status, calls } = await submit(t, null, null, { email: 'invalid', message: 'short' });
  assert.equal(status, 400);
  assert.equal(calls.length, 0);
});

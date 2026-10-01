import { NextResponse } from "next/server";
import { contactValidationSchema } from "@/app/lib/contact-validation";

export const runtime = "nodejs";

async function sendEmail(data: FormData) {
  const accessKey = process.env.FORMLY_ACCESS_KEY || process.env.LEGACY_FORMLY_KEY;
  if (!accessKey?.trim()) throw new Error("Formly is not configured");
  data.set("access_key", accessKey.trim());
  data.set("subject", "New Fransunisoft contact enquiry");
  const response = await fetch("https://formly.email/submit", {
    method: "POST",
    headers: { Accept: "application/json" },
    body: data,
    // Inspect the success redirect without fetching its HTML page.
    redirect: "manual",
    signal: AbortSignal.timeout(30000),
  });
  if ([301, 302, 303, 307, 308].includes(response.status)) {
    const location = response.headers.get("location");
    const target = location ? new URL(location, "https://formly.email") : null;
    if (target?.origin === "https://formly.email" && /^\/thank-you\/?$/.test(target.pathname) && !target.search) return;
    throw new Error("Formly returned an unexpected redirect");
  }
  if (!response.ok) throw new Error(`Formly HTTP ${response.status}`);
  const result = await response.json();
  if (result?.success !== true) throw new Error("Formly did not confirm delivery");
}

async function saveToSheet(data: Record<string, unknown>) {
  const webhookUrl = process.env.GOOGLE_CRM_WEBHOOK_URL;
  const apiKey = process.env.GOOGLE_CRM_API_KEY;
  if (!webhookUrl || !apiKey) throw new Error("Google CRM is not configured");
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ ...data, phoneNumber: data.phone, apiKey }),
    redirect: "follow",
    signal: AbortSignal.timeout(30000),
  });
  if (!response.ok) throw new Error(`Google CRM HTTP ${response.status}`);
  const result = await response.json().catch(() => {
    throw new Error("Google CRM returned a non-JSON response; check the Apps Script web app deployment and access settings");
  });
  if (result?.success !== true) {
    const knownErrors = ["Unauthorized", "Invalid required fields", "Empty request", "Unable to save lead"];
    const reason = knownErrors.includes(result?.message) ? result.message : "Unrecognized response";
    throw new Error(`Google CRM rejected the enquiry: ${reason}`);
  }
  return result.leadId;
}

export async function POST(request: Request) {
  let raw: Record<string, unknown>;
  let attachment: FormDataEntryValue | null = null;
  try {
    if (request.headers.get("content-type")?.includes("application/json")) {
      raw = await request.json();
    } else {
      const form = await request.formData();
      attachment = form.get("attachment");
      raw = Object.fromEntries(form.entries());
    }
  } catch {
    return NextResponse.json({ success: false, message: "Invalid contact form data" }, { status: 400 });
  }
  let values;
  try {
    values = await contactValidationSchema.validate(raw, { abortEarly: false, stripUnknown: true });
  } catch {
    return NextResponse.json({ success: false, message: "Please check the contact form fields" }, { status: 400 });
  }
  const emailData = new FormData();
  Object.entries(values).forEach(([key, value]) => emailData.set(key, value ?? ""));
  if (attachment instanceof File && attachment.size > 0) emailData.set("attachment", attachment);

  // A failure in one destination must not prevent delivery to the other.
  const [email, sheet] = await Promise.allSettled([sendEmail(emailData), saveToSheet(values)]);
  const emailSent = email.status === "fulfilled";
  const sheetSaved = sheet.status === "fulfilled";
  if (!emailSent) console.error("Contact email delivery failed:", email.reason instanceof Error ? email.reason.message : "Unknown error");
  if (!sheetSaved) console.error("Contact Google Sheets delivery failed:", sheet.reason instanceof Error ? sheet.reason.message : "Unknown error");

  // An accepted enquiry should not invite a duplicate submission if one service failed.
  const success = emailSent || sheetSaved;
  return NextResponse.json({
    success,
    emailSent,
    sheetSaved,
    partial: success && !(emailSent && sheetSaved),
    leadId: sheetSaved ? sheet.value : undefined,
    message: success
      ? "Thanks for reaching out. Your enquiry has been received and the Fransunisoft team will get back to you shortly."
      : "We could not confirm receipt of your enquiry. Please email hello@fransunisoft.com for help.",
  }, { status: success ? 200 : 502 });
}

// src/app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  let transporter;

  try {
    // DYNAMIC IMPORT: Loads at runtime to avoid Turbopack bundling crash
    const nodemailer = await import('nodemailer');
    console.log('Nodemailer loaded dynamically (Turbopack bypass)');

    // Create transporter
    transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'mrchidubem@gmail.com',
        pass: 'wexp tzav rkdz nltg',
      },
    });

    // Verify
    await new Promise((resolve, reject) => {
      transporter.verify((error, success) => {
        if (error) {
          console.error('Transporter auth failed:', error);
          reject(error);
        } else {
          console.log('Transporter ready!');
          resolve(success);
        }
      });
    });

    console.log('API hit: Processing form...');

    const data = await request.formData();
    // FIXED: Check for empty body
    if (!data || data.entries().next().done) {
      return NextResponse.json({ error: 'No form data provided' }, { status: 400 });
    }

    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const email = data.get('email');
    const phone = data.get('phone')?.toString().trim();
    const serviceType = data.get('serviceType');
    const company = data.get('company');
    const message = data.get('message')?.toString().trim() || 'No message provided';
    const file = data.get('file');

    console.log('Form data received:', { firstName, email, phone, hasFile: !!file, messageLength: message.length });

    if (!firstName || !lastName || !email || !serviceType || !company || !phone) {
      console.log('Validation failed: Missing fields');
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // FIXED: Attachments only if valid file
    const attachments = [];
    let hasAttachment = false;
    if (file && file.size > 0 && file.name) {
      try {
        const buffer = Buffer.from(await file.arrayBuffer());
        if (buffer.length > 0) {
          attachments.push({
            filename: file.name,
            content: buffer,
            contentType: file.type || 'application/octet-stream',
          });
          hasAttachment = true;
          console.log('Attachment added:', file.name, 'size:', file.size);
        } else {
          console.log('Empty buffer—skipping attachment');
        }
      } catch (fileErr) {
        console.error('File processing error (skipping):', fileErr);
      }
    } else {
      console.log('No valid file—sending plain email');
    }

    // FIXED: Build bodies explicitly
    const plainTextBody = `
New Contact from ${firstName} ${lastName}

Name: ${firstName} ${lastName}
User's Email: ${email}
Phone: ${phone}
Service Type: ${serviceType}
Company: ${company}
Message: ${message}
${hasAttachment ? 'Attachment: File included' : ''}
    `.trim();

    const htmlBody = `
<h2>New Contact from ${firstName} ${lastName}</h2>
<p>Someone submitted your contact form! Reply to their email below.</p>
<table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%;">
  <tr><td><strong>Name:</strong></td><td>${firstName} ${lastName}</td></tr>
  <tr><td><strong>User's Email (reply to this):</strong></td><td>${email}</td></tr>
  <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
  <tr><td><strong>Service Type:</strong></td><td>${serviceType}</td></tr>
  <tr><td><strong>Company:</strong></td><td>${company}</td></tr>
  <tr><td><strong>Message:</strong></td><td>${message.replace(/\n/g, '<br>')}</td></tr>
</table>
${hasAttachment ? '<p><strong>Attachment:</strong> File included</p>' : ''}
    `.trim();

    // FIXED: Use plain text if no attachments (no multipart mode, no Content-Type error)
    const mailOptions = {
      from: '"FSX Tech Contact" <mrchidubem@gmail.com>',
      to: 'mrchidubem9@gmail.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      ...(hasAttachment ? { html: htmlBody, attachments } : { text: plainTextBody }),
    };

    console.log('Sending email to:', mailOptions.to, 'with', attachments.length, 'attachments', 'type:', hasAttachment ? 'multipart' : 'plain');
    await transporter.sendMail(mailOptions);
    console.log('Email sent!');

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Full email error:', error);
    if (transporter) transporter.close();
    if (error.message.includes('535') || error.message.includes('auth')) {
      return NextResponse.json({ error: 'Gmail auth failed. Check app password & 2FA.' }, { status: 500 });
    }
    return NextResponse.json({ error: 'Failed to send email: ' + error.message }, { status: 500 });
  }
}
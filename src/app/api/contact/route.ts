import { NextRequest, NextResponse } from 'next/server';
import { appendContactInquiry } from '@/lib/googleSheets';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, description, preferredContact } = body;

    // Strict validation
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: 'Please provide your name, business email, and project description.' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const inquiryId = `ARVX-INQ-${Date.now().toString().slice(-6)}`;
    const apiKey = process.env.RESEND_API_KEY;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || 'info@aravextechstudio.com';

    // 1. Google Sheets & Serverless Email Forwarding via Universal Webhook
    let sheetResult = null;
    try {
      sheetResult = await appendContactInquiry({
        inquiryId,
        name,
        email,
        phone: phone || '',
        company: company || 'Individual / Startup',
        service: service || 'General Technical Practice',
        budget: budget || 'Flexible',
        preferredContact: preferredContact || 'Email',
        description,
        forwardTo: receiver,
        replyTo: email,
      });
    } catch (sheetErr) {
      console.error('[Contact API] Google Sheet / MailApp sync failed:', sheetErr);
    }

    // 2. Direct Resend Dispatch (if configured)
    if (apiKey) {
      try {
        // Forwarding notification to studio team at info@aravextechstudio.com
        // reply_to is set to the client email so hitting "Reply" in inbox answers client directly
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: 'ARAVEX Tech Studio <onboarding@resend.dev>',
            to: [receiver],
            reply_to: email,
            subject: `New Project Inquiry from ${name} (${company || 'Individual'}) [${inquiryId}]`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif; max-width: 620px; color: #111; line-height: 1.5;">
                <div style="background: #0f1114; padding: 18px 24px; border-radius: 12px 12px 0 0; border-bottom: 2px solid #10b981;">
                  <h2 style="color: #ffffff; margin: 0; font-size: 18px;">ARAVEX TECH STUDIO • PROJECT INQUIRY</h2>
                  <span style="color: #10b981; font-size: 12px; font-weight: bold;">ID: ${inquiryId} • Forwarded to ${receiver}</span>
                </div>
                <div style="background: #ffffff; padding: 24px; border: 1px solid #e4e4e7; border-top: none; border-radius: 0 0 12px 12px;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
                    <tr><td style="padding: 6px 0; color: #64748b; width: 140px;">Client Name:</td><td style="font-weight: 600; color: #09090b;">${name}</td></tr>
                    <tr><td style="padding: 6px 0; color: #64748b;">Client Email:</td><td style="font-weight: 600;"><a href="mailto:${email}" style="color: #10b981;">${email}</a></td></tr>
                    ${phone ? `<tr><td style="padding: 6px 0; color: #64748b;">Phone / WhatsApp:</td><td style="color: #09090b; font-weight: 600;">${phone}</td></tr>` : ''}
                    <tr><td style="padding: 6px 0; color: #64748b;">Company / Org:</td><td style="color: #09090b;">${company || 'N/A'}</td></tr>
                    <tr><td style="padding: 6px 0; color: #64748b;">Service Required:</td><td style="color: #09090b; font-weight: 600;">${service || 'General Inquiry'}</td></tr>
                    <tr><td style="padding: 6px 0; color: #64748b;">Estimated Budget:</td><td style="color: #09090b;">${budget || 'Not specified'}</td></tr>
                    <tr><td style="padding: 6px 0; color: #64748b;">Reply Via:</td><td style="color: #09090b; font-weight: 600;">${preferredContact || 'Email'}</td></tr>
                  </table>
                  <h4 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; color: #64748b;">Project Scope & Brief:</h4>
                  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; color: #1e293b; white-space: pre-wrap; line-height: 1.6;">
                    ${description.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
                  </div>
                  <div style="margin-top: 24px; padding: 12px 16px; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; color: #065f46; font-size: 12px; font-weight: 600;">
                    ✉️ Hit Reply in your email client to answer ${name} directly at ${email}.
                  </div>
                </div>
              </div>
            `,
          }),
        });

        // Automated confirmation to client with reply_to set to info@aravextechstudio.com
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: 'ARAVEX Tech Studio <onboarding@resend.dev>',
            to: [email],
            reply_to: receiver,
            subject: `Inquiry Received — ARAVEX Tech Studio [${inquiryId}]`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif; max-width: 580px; color: #111; line-height: 1.6;">
                <div style="background: #0f1114; padding: 18px 24px; border-radius: 12px 12px 0 0; border-bottom: 2px solid #10b981;">
                  <h2 style="color: #ffffff; margin: 0; font-size: 18px;">ARAVEX TECH STUDIO</h2>
                  <span style="color: #94a3b8; font-size: 12px;">Inquiry Confirmation • Reference: ${inquiryId}</span>
                </div>
                <div style="background: #ffffff; padding: 24px; border: 1px solid #e4e4e7; border-top: none; border-radius: 0 0 12px 12px;">
                  <p>Hello <strong>${name}</strong>,</p>
                  <p>Thank you for submitting your project specifications to <strong>ARAVEX Tech Studio</strong>. We have received your inquiry for <strong>${service}</strong>.</p>
                  <p>Your brief has been forwarded directly to our founding systems architecture team. We will review your technical requirements and reply via your preferred channel (<strong>${preferredContact || 'Email'}</strong>) within <strong>4 to 24 business hours</strong>.</p>
                  ${preferredContact === 'Google Meet' ? `
                  <div style="background: #eff6ff; border-left: 3px solid #3b82f6; padding: 12px 16px; margin: 20px 0; font-size: 13px;">
                    <strong>Schedule 30-Min Google Meet:</strong> You can choose a convenient slot on our calendar directly via <a href="https://calendly.com/aravextechstudio/30min" style="color: #2563eb; font-weight: bold;">Calendly (30-Min Google Meet)</a>.
                  </div>
                  ` : ''}
                  <div style="background: #f8fafc; border-left: 3px solid #10b981; padding: 12px 16px; margin: 20px 0; font-size: 13px;">
                    <strong>Direct Reply Support:</strong> You can reply directly to this email (<a href="mailto:${receiver}" style="color: #10b981;">${receiver}</a>) to share additional documentation, PRDs, or project repositories.
                  </div>
                  <p style="color: #64748b; font-size: 12px; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 16px;">
                    ARAVEX Tech Studio • Systems Architecture & Production Engineering<br/>
                    <a href="https://aravex.tech" style="color: #10b981;">https://aravex.tech</a> • ${receiver}
                  </p>
                </div>
              </div>
            `,
          }),
        });
      } catch (resendErr) {
        console.error('[Contact API] Resend email dispatch failed:', resendErr);
      }
    } else {
      console.log(`[Contact API] Form submitted [${inquiryId}] - Forwarded to ${receiver} with reply-to ${email}`);
    }

    return NextResponse.json(
      {
        success: true,
        inquiryId,
        forwardedTo: receiver,
        replyVia: preferredContact || 'Email',
        message: `Your project inquiry has been forwarded to ${receiver}. Our engineering group will review your specifications and reply via ${preferredContact || 'Email'} within 4 to 24 business hours.`,
        sheetSync: sheetResult,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your inquiry. Please try again or email info@aravextechstudio.com directly.' },
      { status: 500 }
    );
  }
}

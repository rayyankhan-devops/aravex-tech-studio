import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { appendTrainingEnrollment } from '@/lib/googleSheets';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phoneWhatsApp,
      courseId,
      courseTitle,
      courseFee,
      courseDuration,
      experienceLevel,
      transactionId,
      screenshotBase64,
      screenshotName,
    } = body;

    // Strict validation
    if (!fullName || !email || !phoneWhatsApp || !courseTitle) {
      return NextResponse.json(
        { error: 'Please provide full name, email, WhatsApp number, and course details.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const enrollmentId = `ARVX-TRN-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    let localScreenshotUrl = '';

    // If payment screenshot base64 is provided, persist it locally in public/uploads/receipts/
    if (screenshotBase64 && typeof screenshotBase64 === 'string') {
      try {
        const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'receipts');
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        const safeExtMatch = screenshotName ? screenshotName.match(/\.(png|jpg|jpeg|webp|pdf)$/i) : null;
        const extension = safeExtMatch ? safeExtMatch[0].toLowerCase() : '.png';
        const fileName = `${enrollmentId}-${Date.now()}${extension}`;
        const filePath = path.join(uploadDir, fileName);

        const base64Data = screenshotBase64.replace(/^data:([A-Za-z-+/]+);base64,/, '');
        fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));

        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
        localScreenshotUrl = `${siteUrl}/uploads/receipts/${fileName}`;
      } catch (fileErr) {
        console.error('[Training API] Error saving local receipt screenshot:', fileErr);
      }
    }

    // Append to Google Sheets ("Training Enrollments" tab in the shared spreadsheet)
    const sheetResult = await appendTrainingEnrollment({
      enrollmentId,
      fullName,
      email,
      phoneWhatsApp,
      courseId: courseId || 'unknown',
      courseTitle,
      courseFee: courseFee || 'Not specified',
      courseDuration: courseDuration || '1 Month',
      experienceLevel: experienceLevel || 'Beginner',
      transactionId: transactionId || 'Pending Verification',
      screenshotUrl: localScreenshotUrl || 'Attached in system',
      screenshotBase64: screenshotBase64 || '',
      screenshotName: screenshotName || `${enrollmentId}-receipt.png`,
      status: 'Pending Verification',
    });

    // Optional email notification if Resend is configured
    const apiKey = process.env.RESEND_API_KEY;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || 'info@aravextechstudio.com';
    if (apiKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: 'ARAVEX Tech Studio <info@aravextechstudio.com>',
            to: [receiver],
            subject: `New Training Enrollment: ${fullName} — ${courseTitle} (${enrollmentId})`,
            html: `
              <h2>ARAVEX Training Enrollment & Payment Proof</h2>
              <p><strong>Registration ID:</strong> ${enrollmentId}</p>
              <p><strong>Candidate Name:</strong> ${fullName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>WhatsApp:</strong> ${phoneWhatsApp}</p>
              <p><strong>Course:</strong> ${courseTitle} (${courseDuration})</p>
              <p><strong>Fee:</strong> ${courseFee}</p>
              <p><strong>Experience Level:</strong> ${experienceLevel}</p>
              <p><strong>Transaction / Ref ID:</strong> ${transactionId || 'None provided'}</p>
              <p><strong>Receipt URL:</strong> <a href="${localScreenshotUrl}">${localScreenshotUrl}</a></p>
            `,
          }),
        });
      } catch (emailErr) {
        console.error('[Training API] Resend email dispatch failed:', emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      enrollmentId,
      screenshotUrl: localScreenshotUrl,
      message: 'Enrollment submitted successfully. Payment screenshot uploaded and stored in Google Sheet.',
      sheetSync: sheetResult,
    });
  } catch (err: any) {
    console.error('[Training API] Error processing enrollment:', err);
    return NextResponse.json(
      { error: err.message || 'Server error processing training enrollment.' },
      { status: 500 }
    );
  }
}

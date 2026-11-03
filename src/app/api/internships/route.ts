import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { appendInternshipApplication } from '@/lib/googleSheets';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      internshipType = 'Unpaid',
      name,
      email,
      phone,
      city,
      education,
      portfolioUrl,
      resumeUrl,
      trackId,
      trackTitle,
      category,
      experienceLevel,
      availability,
      motivation,
      monthlyFee,
      fee,
      duration,
      transactionId,
      screenshotBase64,
      screenshotName,
    } = body;

    if (!name || !email || !phone || !portfolioUrl || !trackTitle) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields (Name, Email, Phone, Portfolio, Track).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const isPaid = internshipType === 'Paid';
    const applicationId = isPaid
      ? `ARVX-PAID-2026-${Math.floor(1000 + Math.random() * 9000)}`
      : `ARVX-UNP-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    let localScreenshotUrl = '';

    // If paid internship with receipt screenshot base64, save locally to public/uploads/receipts/
    if (isPaid && screenshotBase64 && typeof screenshotBase64 === 'string') {
      try {
        const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'receipts');
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        const safeExtMatch = screenshotName ? screenshotName.match(/\.(png|jpg|jpeg|webp|pdf)$/i) : null;
        const extension = safeExtMatch ? safeExtMatch[0].toLowerCase() : '.png';
        const fileName = `${applicationId}-${Date.now()}${extension}`;
        const filePath = path.join(uploadDir, fileName);

        const base64Data = screenshotBase64.replace(/^data:([A-Za-z-+/]+);base64,/, '');
        fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));

        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
        localScreenshotUrl = `${siteUrl}/uploads/receipts/${fileName}`;
      } catch (fileErr) {
        console.error('[Internship API] Error saving local receipt screenshot:', fileErr);
      }
    }

    console.log(`--- ARAVEX TALENT ACCELERATOR NEW [${internshipType.toUpperCase()}] APPLICATION ---`);
    console.log({
      applicationId,
      internshipType,
      timestamp: new Date().toISOString(),
      trackTitle,
      trackId,
      name,
      email,
      phone,
      city,
      education,
      portfolioUrl,
      resumeUrl,
      transactionId: transactionId || 'N/A',
      localScreenshotUrl: localScreenshotUrl || 'None',
    });

    // Append to Google Sheets ("Internship Applications" tab in the shared spreadsheet)
    const sheetResult = await appendInternshipApplication({
      applicationId,
      internshipType,
      name,
      email,
      phone,
      city: city || 'Not specified',
      education: education || 'Not specified',
      trackTitle,
      trackId: trackId || 'general',
      category: category || 'Engineering',
      portfolioUrl,
      resumeUrl: resumeUrl || 'Not provided',
      experienceLevel: experienceLevel || 'Student / Intermediate Projects',
      availability: availability || 'Immediate',
      motivation: motivation || '',
      fee: isPaid ? (monthlyFee || 'Rs. 5,000 / Month') : 'Free (Merit-Based)',
      duration: duration || '3 Months',
      transactionId: transactionId || 'N/A',
      screenshotUrl: localScreenshotUrl || 'Attached in system',
      screenshotBase64: screenshotBase64 || '',
      screenshotName: screenshotName || `${applicationId}-receipt.png`,
      status: isPaid ? 'Pending Payment Verification' : 'Under Portfolio Review',
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
            from: 'ARAVEX Talent Accelerator <info@aravextechstudio.com>',
            to: [receiver],
            subject: `New [${internshipType.toUpperCase()}] Application: ${name} — ${trackTitle} (${applicationId})`,
            html: `
              <h2>ARAVEX Talent Accelerator Application [${internshipType.toUpperCase()}]</h2>
              <p><strong>Application ID:</strong> ${applicationId}</p>
              <p><strong>Track Type:</strong> ${isPaid ? 'Paid Internship (3 Months, Rs. 5,000/mo)' : 'Unpaid Merit Track'}</p>
              <p><strong>Candidate Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
              <p><strong>Track:</strong> ${trackTitle}</p>
              <p><strong>City:</strong> ${city || 'N/A'}</p>
              <p><strong>Education:</strong> ${education || 'N/A'}</p>
              <p><strong>Portfolio / GitHub:</strong> <a href="${portfolioUrl}">${portfolioUrl}</a></p>
              ${resumeUrl ? `<p><strong>Resume URL:</strong> <a href="${resumeUrl}">${resumeUrl}</a></p>` : ''}
              ${
                isPaid
                  ? `
                  <h3>Payment Verification Details:</h3>
                  <p><strong>Monthly Fee:</strong> Rs. 5,000 / Month</p>
                  <p><strong>Duration:</strong> 3 Months Cohort</p>
                  <p><strong>Transaction Ref ID:</strong> ${transactionId || 'Pending'}</p>
                  ${localScreenshotUrl ? `<p><strong>Receipt Proof:</strong> <a href="${localScreenshotUrl}">View Uploaded Screenshot</a></p>` : ''}
                `
                  : ''
              }
              <p><strong>Motivation Statement:</strong> ${motivation || 'N/A'}</p>
            `,
          }),
        });
      } catch (emailErr) {
        console.error('[Internship API] Resend email dispatch failed:', emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        applicationId,
        internshipType,
        message: isPaid
          ? 'Your Paid Internship application and payment receipt have been recorded. Our admissions team will verify your transaction and issue your credentials within 24 hours.'
          : 'Your Unpaid Internship application has been submitted for merit portfolio review.',
        sheetSync: sheetResult,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Internship application error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error processing application.' },
      { status: 500 }
    );
  }
}

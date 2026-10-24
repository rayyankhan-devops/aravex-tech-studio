import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      city,
      education,
      portfolioUrl,
      resumeUrl,
      trackId,
      trackTitle,
      availability,
      motivation,
    } = body;

    if (!name || !email || !phone || !portfolioUrl || !trackTitle) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields (Name, Email, Phone, Portfolio, Track).' },
        { status: 400 }
      );
    }

    const applicationId = `ARVX-INT-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    console.log('--- AREVEX TALENT ACCELERATOR NEW APPLICATION ---');
    console.log({
      applicationId,
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
      availability,
      motivation,
    });

    return NextResponse.json(
      {
        success: true,
        applicationId,
        message: 'Your internship application has been recorded. The review team will contact you within 3-5 business days.',
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

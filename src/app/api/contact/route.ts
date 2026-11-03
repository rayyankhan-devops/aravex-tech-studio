import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, budget, description, preferredContact } = body;

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

    const apiKey = process.env.RESEND_API_KEY;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || 'info@aravextechstudio.com';

    // If Resend API key is configured, send actual email
    if (apiKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: 'Aravex Tech Studio <onboarding@resend.dev>',
          to: [receiver],
          subject: `New Project Inquiry from ${name} (${company || 'Individual'})`,
          html: `
            <h2>New Inquiry for ARAVEX TECH STUDIO</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Business Email:</strong> ${email}</p>
            <p><strong>Company / Organization:</strong> ${company || 'N/A'}</p>
            <p><strong>Service Required:</strong> ${service || 'General Inquiry'}</p>
            <p><strong>Estimated Budget:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Preferred Contact Method:</strong> ${preferredContact || 'Email'}</p>
            <h3>Project Scope & Requirements:</h3>
            <p>${description.replace(/\n/g, '<br/>')}</p>
          `,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Resend API error:', errorData);
      }
    } else {
      // In dev or unconfigured mode, safely log submission to console
      console.log('--- ARAVEX NEW LEAD SUBMISSION ---');
      console.log({ name, email, company, service, budget, description, preferredContact });
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your project inquiry has been received. Our engineering group will review your specifications and reply within 24 business hours.',
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

import fs from 'fs';

// Load .env.local
let WEBHOOK_URL = '';
if (fs.existsSync('.env.local')) {
  const envContent = fs.readFileSync('.env.local', 'utf8');
  const match = envContent.match(/GOOGLE_SHEET_WEBHOOK_URL=(.+)/);
  if (match) {
    WEBHOOK_URL = match[1].trim().replace(/^["']|["']$/g, '');
  }
}

console.log('Target Google Sheets Webhook:', WEBHOOK_URL);

async function testTraining() {
  console.log('\n--- 1. Testing Training Enrollments Sheet ---');
  const payload = {
    type: 'training',
    data: {
      timestamp: new Date().toLocaleString(),
      enrollmentId: `ARVX-TRN-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      fullName: 'Rayyan Khan (Demo Student)',
      email: 'student@example.com',
      phoneWhatsApp: '+92 300 1234567',
      courseTitle: 'Practical Artificial Intelligence & AI Agents',
      courseFee: 'PKR 2,000',
      courseDuration: '4 Weeks (1 Month)',
      experienceLevel: 'Intermediate',
      transactionId: 'TRX-98234-PK',
      screenshotUrl: 'https://aravex.tech/uploads/receipts/demo-receipt.png',
      status: 'Pending Verification',
    },
  };

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });
    console.log(`Training HTTP Status: ${res.status}`);
    const text = await res.text();
    console.log(`Training Response:`, text.slice(0, 300));
  } catch (err) {
    console.error('Training Error:', err);
  }
}

async function testInternship() {
  console.log('\n--- 2. Testing Internship Applications Sheet ---');
  const payload = {
    type: 'internship',
    data: {
      timestamp: new Date().toLocaleString(),
      applicationId: `ARVX-INT-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      name: 'Uzair Ahmed (Demo Applicant)',
      email: 'intern@example.com',
      phone: '+92 312 9876543',
      city: 'Islamabad',
      education: 'BS Software Engineering (NUST)',
      trackTitle: 'Full-Stack Web & Next.js Architecture',
      trackId: 'web-engineering',
      category: 'Engineering',
      portfolioUrl: 'https://github.com/aravex',
      resumeUrl: 'https://drive.google.com/file/d/demo-resume/view',
      experienceLevel: 'Student / Intermediate Projects',
      availability: 'Immediate (Within 7 Days)',
      motivation: 'Excited to build distributed applications at ARAVEX Tech Studio.',
      status: 'Under Review',
    },
  };

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });
    console.log(`Internship HTTP Status: ${res.status}`);
    const text = await res.text();
    console.log(`Internship Response:`, text.slice(0, 300));
  } catch (err) {
    console.error('Internship Error:', err);
  }
}

async function main() {
  if (!WEBHOOK_URL) {
    console.error('Error: GOOGLE_SHEET_WEBHOOK_URL not found in .env.local');
    process.exit(1);
  }
  await testTraining();
  await testInternship();
}

main();

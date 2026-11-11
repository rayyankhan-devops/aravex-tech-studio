import fs from 'fs';
import path from 'path';

export interface TrainingEnrollmentData {
  enrollmentId: string;
  timestamp?: string;
  fullName: string;
  email: string;
  phoneWhatsApp: string;
  courseTitle: string;
  courseId: string;
  courseFee: string;
  courseDuration: string;
  experienceLevel: string;
  transactionId?: string;
  screenshotUrl?: string;
  screenshotBase64?: string;
  screenshotName?: string;
  status?: string;
}

export interface InternshipApplicationData {
  applicationId: string;
  timestamp?: string;
  name: string;
  email: string;
  phone: string;
  city?: string;
  education?: string;
  trackTitle: string;
  trackId: string;
  category?: string;
  portfolioUrl: string;
  resumeUrl?: string;
  experienceLevel?: string;
  availability?: string;
  motivation?: string;
  status?: string;
  internshipType?: 'Paid' | 'Unpaid';
  fee?: string;
  duration?: string;
  transactionId?: string;
  screenshotUrl?: string;
  screenshotBase64?: string;
  screenshotName?: string;
}

export interface ContactInquiryData {
  inquiryId: string;
  timestamp?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  preferredContact?: string;
  description: string;
  forwardTo?: string;
  replyTo?: string;
  status?: string;
}

/**
 * Appends a Training Enrollment entry into the 'Training Enrollments' sheet
 * within the single ARAVEX Google Spreadsheet.
 */
export async function appendTrainingEnrollment(data: TrainingEnrollmentData) {
  const payload = {
    type: 'training' as const,
    data: {
      ...data,
      timestamp: data.timestamp || new Date().toISOString(),
      status: data.status || 'Pending Verification',
    },
  };

  return await sendToGoogleSheetWebhook(payload);
}

/**
 * Appends an Internship Application entry into its dedicated sheet
 * ('Paid Internships' or 'Unpaid Internships') within the single ARAVEX Google Spreadsheet.
 */
export async function appendInternshipApplication(data: InternshipApplicationData) {
  const isPaid = data.internshipType === 'Paid' || (data.fee && data.fee.indexOf('Rs.') > -1);
  const payload = {
    type: isPaid ? ('internship_paid' as const) : ('internship_unpaid' as const),
    data: {
      ...data,
      internshipType: isPaid ? 'Paid' : 'Unpaid',
      timestamp: data.timestamp || new Date().toISOString(),
      status: data.status || (isPaid ? 'Pending Payment Verification' : 'Under Portfolio Review'),
    },
  };

  return await sendToGoogleSheetWebhook(payload);
}

/**
 * Appends a Project / Client Inquiry entry into the 'Contact Inquiries' sheet
 * and triggers immediate forwarding to info@aravextechstudio.com with reply-to.
 */
export async function appendContactInquiry(data: ContactInquiryData) {
  const payload = {
    type: 'contact' as const,
    data: {
      ...data,
      forwardTo: data.forwardTo || 'info@aravextechstudio.com',
      replyTo: data.email,
      timestamp: data.timestamp || new Date().toISOString(),
      status: data.status || 'New Lead',
    },
  };

  return await sendToGoogleSheetWebhook(payload);
}

/**
 * Core dispatch to Google Apps Script Webhook.
 * If webhook is not configured or network fails, gracefully falls back to local logging & JSON persistence.
 */
async function sendToGoogleSheetWebhook(payload: {
  type: 'training' | 'internship' | 'internship_paid' | 'internship_unpaid' | 'contact';
  data: any;
}) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

  if (webhookUrl && webhookUrl.trim() !== '') {
    try {
      console.log(`[Google Sheets] Sending ${payload.type} data to configured webhook...`);
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        redirect: 'follow',
      });

      if (res.ok) {
        const text = await res.text();
        let parsed: any = {};
        try {
          parsed = JSON.parse(text);
        } catch {
          parsed = { text };
        }
        console.log(`[Google Sheets] Successfully synced ${payload.type} row to Google Sheet:`, parsed);
        return { success: true, syncedToGoogleSheet: true, response: parsed };
      } else {
        console.warn(`[Google Sheets] Webhook returned status ${res.status}. Falling back to local logging.`);
      }
    } catch (err) {
      console.error('[Google Sheets] Webhook connection error:', err);
    }
  } else {
    console.warn('[Google Sheets] GOOGLE_SHEET_WEBHOOK_URL is not configured in .env.local. Storing locally.');
  }

  // Fallback: save to local json file in project directory so no data is ever lost
  try {
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const filePath = path.join(dataDir, 'submissions.json');
    let existing: any[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        existing = JSON.parse(content);
      } catch {
        existing = [];
      }
    }

    existing.unshift({
      ...payload,
      recordedAt: new Date().toISOString(),
    });

    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf8');
    console.log(`[Google Sheets Fallback] Record successfully saved to ${filePath}`);
  } catch (fsErr) {
    console.error('[Google Sheets Fallback] Could not write to local JSON:', fsErr);
  }

  return {
    success: true,
    syncedToGoogleSheet: false,
    message: 'Submission recorded locally. Configure GOOGLE_SHEET_WEBHOOK_URL in .env.local to stream directly to Google Sheet.',
  };
}

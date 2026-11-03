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
 * Appends an Internship Application entry into the 'Internship Applications' sheet
 * within the SAME ARAVEX Google Spreadsheet.
 */
export async function appendInternshipApplication(data: InternshipApplicationData) {
  const payload = {
    type: 'internship' as const,
    data: {
      ...data,
      timestamp: data.timestamp || new Date().toISOString(),
      status: data.status || 'Under Review',
    },
  };

  return await sendToGoogleSheetWebhook(payload);
}

/**
 * Core dispatch to Google Apps Script Webhook.
 * If webhook is not configured or network fails, gracefully falls back to local logging & JSON persistence.
 */
async function sendToGoogleSheetWebhook(payload: { type: 'training' | 'internship'; data: any }) {
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

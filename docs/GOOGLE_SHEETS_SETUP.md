# ARAVEX TECH STUDIO — Google Sheets Integration Guide

This guide explains how your website automatically stores **Training Enrollments** (including payment receipts) and **Internship Applications** in **separate sheets (tabs) within the SAME Google Spreadsheet file**.

---

## Architecture Overview

```
                          ARAVEX TECH STUDIO WEBSITE
                                      │
              ┌───────────────────────┴───────────────────────┐
              ▼                                               ▼
     Training Page Modal                            Internship Page Modal
 [Candidate Details + Dropbox]                     [Application Details]
              │                                               │
              ▼                                               ▼
      /api/training/enroll                            /api/internships
              │                                               │
              └───────────────────────┬───────────────────────┘
                                      ▼
                        src/lib/googleSheets.ts
                                      │
                                      ▼
                        Google Apps Script Webhook
                                      │
                  ┌───────────────────┴───────────────────┐
                  ▼                                       ▼
       [Training Enrollments]                 [Internship Applications]
     Sheet Tab 1 in Spreadsheet              Sheet Tab 2 in Spreadsheet
    (Receipts saved to Google Drive)
```

---

## 2-Minute Quick Setup

### Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.new) in your browser.
2. Title your spreadsheet (e.g., `ARAVEX Tech Studio Master Database`).

### Step 2: Open Apps Script Editor
1. In the top navigation menu of your sheet, click **Extensions** → **Apps Script**.
2. Delete whatever default code is inside the editor (`Code.gs`).
3. Open `scripts/google-apps-script.js` from this project, copy **all code**, and paste it into the Apps Script editor.

### Step 3: Deploy as Web App
1. Click the blue **Deploy** button in the top-right corner → **New deployment**.
2. Next to *Select type*, click the gear icon (⚙️) and select **Web app**.
3. Fill in the fields:
   - **Description**: `ARAVEX Forms Webhook`
   - **Execute as**: `Me (<your google email>)`
   - **Who has access**: `Anyone` *(Crucial: must be set to "Anyone" so the website can post data).*
4. Click **Deploy**.
5. Google will ask you to *Authorize access*:
   - Click **Authorize access** → select your Google account.
   - Click **Advanced** (if a warning appears) → click **Go to Untitled project (unsafe)**.
   - Click **Allow**.
6. Copy the **Web App URL** provided (it looks like `https://script.google.com/macros/s/AKfycb.../exec`).

### Step 4: Add to `.env.local`
In your project's `.env.local` file (or Vercel / server environment variables), add:

```env
GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/AKfycb.../exec"
```

---

## What Happens Automatically

1. **Auto-Generated Tabs in Same File**:
   - The script automatically creates two styled tabs:
     - **`Training Enrollments`**
     - **`Internship Applications`**
   - Each tab is styled with dark headers (`#0F1114`), bold white text, frozen header rows, and alternating row colors.

2. **Payment Screenshot Storage**:
   - When a student uploads their receipt in the Dropbox on the Training page, the Apps Script saves the image directly into an **`ARAVEX Payment Receipts`** folder inside your Google Drive.
   - It sets the file to *Anyone with link can view* and inserts the direct clickable link into the **Payment Screenshot Link** column.
   - The website backend also keeps a local copy in `public/uploads/receipts/`.

3. **Offline / Fallback Resilience**:
   - If `GOOGLE_SHEET_WEBHOOK_URL` is ever missing or unreachable, the system automatically writes records into `data/submissions.json` locally, ensuring no candidate data is ever lost.

---

## Columns in Each Sheet

### Sheet 1: `Training Enrollments`
| Column | Description |
|---|---|
| Timestamp | Date and time submitted |
| Enrollment ID | Unique ID (e.g., `ARVX-TRN-2026-8491`) |
| Candidate Name | Full name of the applicant |
| Email Address | Applicant email |
| WhatsApp Number | WhatsApp number for onboarding communication |
| Course Title | Enrolled course name |
| Fee (PKR) | Cohort fee (e.g., `PKR 1,500`) |
| Cohort Duration | e.g. `4 Weeks (1 Month)` |
| Experience Level | Beginner / Intermediate / Advanced |
| Transaction Ref ID | Optional banking transaction ID entered by applicant |
| Payment Screenshot Link | Direct viewable Google Drive / Web link to the payment slip |
| Status | `Pending Verification` |

### Sheet 2: `Internship Applications`
| Column | Description |
|---|---|
| Timestamp | Date and time submitted |
| Application ID | Unique ID (e.g., `ARVX-INT-2026-3912`) |
| Candidate Name | Full name of the candidate |
| Email Address | Candidate email |
| Phone / WhatsApp | Contact phone |
| City | City of residence |
| Education / Degree | University / Degree details |
| Track Title | Selected internship track |
| Track ID | Track identifier |
| Track Category | e.g., Engineering, Design, etc. |
| Portfolio / GitHub URL | Link to portfolio, GitHub, or live projects |
| Resume / Drive URL | Link to resume or CV |
| Experience Level | Candidate experience tier |
| Availability | Start availability |
| Motivation Statement | Applicant's motivation note |
| Status | `Under Review` |

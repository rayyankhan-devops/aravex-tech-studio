/**
 * ARAVEX TECH STUDIO — Universal Google Sheets Webhook Integration
 * 
 * SETUP INSTRUCTIONS (1-2 minutes):
 * 1. Open your Google Drive and create a new Google Sheet (e.g. named "ARAVEX Master Submissions").
 * 2. In the top menu, click: Extensions -> Apps Script.
 * 3. Delete any default code in Code.gs and paste this ENTIRE file.
 * 4. Click "Deploy" (top right) -> "New deployment".
 * 5. Click the gear icon next to "Select type" and choose "Web app".
 * 6. Set Description: "ARAVEX Forms Webhook".
 * 7. Set "Execute as": "Me (<your email>)".
 * 8. Set "Who has access": "Anyone" (CRITICAL: must be Anyone so your website can send data).
 * 9. Click "Deploy", authorize access with your Google account, and COPY the Web App URL!
 * 10. Paste the URL into your project's .env.local:
 *     GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/AKfycb.../exec"
 * 
 * That's it! Both "Training Enrollments" and "Internship Applications" sheets will be
 * automatically created and maintained with headers, styling, and Google Drive screenshot storage.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 30 seconds for concurrent requests
  lock.tryLock(30000);

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({ status: 'error', message: 'No post data received' }, 400);
    }

    var payload = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    if (payload.type === 'training') {
      var result = handleTrainingSubmission(ss, payload.data || {});
      return createJsonResponse({ status: 'success', type: 'training', details: result });
    } else if (payload.type === 'internship') {
      var result = handleInternshipSubmission(ss, payload.data || {});
      return createJsonResponse({ status: 'success', type: 'internship', details: result });
    } else {
      return createJsonResponse({ status: 'error', message: 'Unknown submission type: ' + payload.type }, 400);
    }
  } catch (err) {
    return createJsonResponse({ status: 'error', message: err.toString() }, 500);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return createJsonResponse({
    status: 'online',
    service: 'ARAVEX TECH STUDIO Google Sheets Webhook',
    timestamp: new Date().toISOString(),
    supportedSheets: ['Training Enrollments', 'Internship Applications']
  });
}

/**
 * Handle Training Enrollment + Payment Screenshot Upload to Google Drive
 */
function handleTrainingSubmission(ss, data) {
  var sheetName = 'Training Enrollments';
  var sheet = ss.getSheetByName(sheetName);

  var headers = [
    'Timestamp',
    'Enrollment ID',
    'Candidate Name',
    'Email Address',
    'WhatsApp Number',
    'Course Title',
    'Fee (PKR)',
    'Cohort Duration',
    'Experience Level',
    'Transaction Reference ID',
    'Payment Screenshot Link',
    'Status'
  ];

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    setupSheetHeader(sheet, headers);
  }

  // Handle Screenshot: If Base64 is sent, upload directly into Google Drive folder
  var screenshotUrl = data.screenshotUrl || 'Not provided';
  if (data.screenshotBase64) {
    try {
      screenshotUrl = saveImageToDrive(
        data.screenshotBase64,
        data.screenshotName || (data.enrollmentId + '-receipt.png'),
        'ARAVEX Payment Receipts'
      );
    } catch (driveErr) {
      Logger.log('Drive upload error: ' + driveErr.toString());
      screenshotUrl = data.screenshotUrl || 'Upload Error: ' + driveErr.toString();
    }
  }

  var row = [
    data.timestamp || new Date().toLocaleString(),
    data.enrollmentId || ('ARVX-TRN-' + Math.floor(1000 + Math.random() * 9000)),
    data.fullName || '',
    data.email || '',
    data.phoneWhatsApp || '',
    data.courseTitle || '',
    data.courseFee || '',
    data.courseDuration || '',
    data.experienceLevel || '',
    data.transactionId || 'N/A',
    screenshotUrl,
    data.status || 'Pending Verification'
  ];

  sheet.appendRow(row);

  // Apply zebra striping & formatting
  formatLastRow(sheet);

  return { enrollmentId: data.enrollmentId, sheet: sheetName, screenshotUrl: screenshotUrl };
}

/**
 * Handle Internship Application
 */
function handleInternshipSubmission(ss, data) {
  var sheetName = 'Internship Applications';
  var sheet = ss.getSheetByName(sheetName);

  var headers = [
    'Timestamp',
    'Application ID',
    'Candidate Name',
    'Email Address',
    'Phone / WhatsApp',
    'City',
    'Education / Degree',
    'Track Title',
    'Track ID',
    'Track Category',
    'Portfolio / GitHub URL',
    'Resume / Drive URL',
    'Experience Level',
    'Availability',
    'Motivation Statement',
    'Status'
  ];

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    setupSheetHeader(sheet, headers);
  }

  var row = [
    data.timestamp || new Date().toLocaleString(),
    data.applicationId || ('ARVX-INT-' + Math.floor(1000 + Math.random() * 9000)),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.city || 'N/A',
    data.education || 'N/A',
    data.trackTitle || '',
    data.trackId || '',
    data.category || '',
    data.portfolioUrl || '',
    data.resumeUrl || 'N/A',
    data.experienceLevel || '',
    data.availability || '',
    data.motivation || '',
    data.status || 'Under Review'
  ];

  sheet.appendRow(row);
  formatLastRow(sheet);

  return { applicationId: data.applicationId, sheet: sheetName };
}

/**
 * Configure header styling for new sheet
 */
function setupSheetHeader(sheet, headers) {
  sheet.appendRow(headers);
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#0F1114'); // ARAVEX Charcoal
  headerRange.setFontColor('#FFFFFF');
  headerRange.setFontWeight('bold');
  headerRange.setFontSize(10);
  headerRange.setHorizontalAlignment('center');
  headerRange.setWrap(true);
  sheet.setFrozenRows(1);
  sheet.setRowHeight(1, 35);

  for (var i = 1; i <= headers.length; i++) {
    sheet.setColumnWidth(i, 180);
  }
}

/**
 * Formats recently appended row
 */
function formatLastRow(sheet) {
  var lastRow = sheet.getLastRow();
  var numCols = sheet.getLastColumn();
  if (lastRow > 1) {
    var range = sheet.getRange(lastRow, 1, 1, numCols);
    range.setFontSize(9);
    range.setVerticalAlignment('middle');
    // Subtle alternate row shading
    if (lastRow % 2 === 0) {
      range.setBackground('#FBFBFA');
    } else {
      range.setBackground('#FFFFFF');
    }
  }
}

/**
 * Saves Base64 image to Google Drive folder and returns shareable URL
 */
function saveImageToDrive(base64String, fileName, folderName) {
  var contentType = 'image/png';
  var rawData = base64String;

  if (base64String.indexOf('data:') === 0 && base64String.indexOf('base64,') > -1) {
    var parts = base64String.split('base64,');
    contentType = parts[0].replace('data:', '').replace(';', '');
    rawData = parts[1];
  }

  var decoded = Utilities.base64Decode(rawData);
  var blob = Utilities.newBlob(decoded, contentType, fileName);

  var folders = DriveApp.getFoldersByName(folderName);
  var folder;
  if (folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = DriveApp.createFolder(folderName);
  }

  var file = folder.createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  return file.getUrl();
}

/**
 * JSON Helper
 */
function createJsonResponse(data, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

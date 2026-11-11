/**
 * ARAVEX TECH STUDIO — Universal Google Sheets Webhook Integration
 * 
 * Supports 4 SEPARATE SHEETS (Tabs) in one Google Spreadsheet:
 * 1. "Paid Internships"       — Fast-track 3-month paid mentorship + payment receipt link
 * 2. "Unpaid Internships"     — Competitive 3-month merit-based track + portfolio/resume
 * 3. "Training Enrollments"   — Practical technical course cohorts + payment receipt link
 * 4. "Contact Inquiries"      — Contact page & product demo briefs + email forwarding to info@aravextechstudio.com
 * 
 * SETUP INSTRUCTIONS (1-2 minutes):
 * 1. Open your Google Drive and open your ARAVEX Google Sheet.
 * 2. In the top menu, click: Extensions -> Apps Script.
 * 3. Delete any default code in Code.gs and paste this ENTIRE file.
 * 4. Click "Deploy" (top right) -> "Manage deployments".
 * 5. Click the Pencil (Edit) icon on your active deployment.
 * 6. Under "Version", select "New version".
 * 7. Click "Deploy".
 * 
 * Done! All 4 sheets will be automatically created with headers, styling,
 * Google Drive receipt uploads, and email forwarding to info@aravextechstudio.com.
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
    var data = payload.data || {};

    // 1. Training Cohorts
    if (payload.type === 'training') {
      var result = handleTrainingSubmission(ss, data);
      return createJsonResponse({ status: 'success', type: 'training', details: result });
    }
    
    // 2. Paid Internships
    else if (payload.type === 'internship_paid') {
      var result = handlePaidInternshipSubmission(ss, data);
      return createJsonResponse({ status: 'success', type: 'internship_paid', details: result });
    }
    
    // 3. Unpaid Internships
    else if (payload.type === 'internship_unpaid') {
      var result = handleUnpaidInternshipSubmission(ss, data);
      return createJsonResponse({ status: 'success', type: 'internship_unpaid', details: result });
    }
    
    // Legacy / Unified Internship routing based on internshipType field
    else if (payload.type === 'internship') {
      var isPaid = (data.internshipType === 'Paid') || (data.fee && data.fee.indexOf('Rs.') > -1) || Boolean(data.screenshotBase64);
      if (isPaid) {
        var result = handlePaidInternshipSubmission(ss, data);
        return createJsonResponse({ status: 'success', type: 'internship_paid', details: result });
      } else {
        var result = handleUnpaidInternshipSubmission(ss, data);
        return createJsonResponse({ status: 'success', type: 'internship_unpaid', details: result });
      }
    }
    
    // 4. Contact Page & Project Inquiries
    else if (payload.type === 'contact') {
      var result = handleContactSubmission(ss, data);
      return createJsonResponse({ status: 'success', type: 'contact', details: result });
    }
    
    else {
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
    supportedSheets: [
      'Paid Internships',
      'Unpaid Internships',
      'Training Enrollments',
      'Contact Inquiries'
    ]
  });
}

/**
 * ============================================================================
 * 1. TRAINING ENROLLMENTS SHEET
 * ============================================================================
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
    setupSheetHeader(sheet, headers, '#0F1114'); // Charcoal Header
  }

  // Handle Screenshot: Upload directly to Google Drive folder
  var screenshotUrl = data.screenshotUrl || 'Not provided';
  if (data.screenshotBase64) {
    try {
      screenshotUrl = saveImageToDrive(
        data.screenshotBase64,
        data.screenshotName || (data.enrollmentId + '-receipt.png'),
        'ARAVEX Training Receipts'
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
    data.courseDuration || '4 Weeks (1 Month)',
    data.experienceLevel || '',
    data.transactionId || 'N/A',
    screenshotUrl,
    data.status || 'Pending Verification'
  ];

  sheet.appendRow(row);
  formatLastRow(sheet);

  return { enrollmentId: data.enrollmentId, sheet: sheetName, screenshotUrl: screenshotUrl };
}

/**
 * ============================================================================
 * 2. PAID INTERNSHIPS SHEET
 * ============================================================================
 */
function handlePaidInternshipSubmission(ss, data) {
  var sheetName = 'Paid Internships';
  var sheet = ss.getSheetByName(sheetName);

  var headers = [
    'Timestamp',
    'Application ID',
    'Candidate Name',
    'Email Address',
    'WhatsApp / Phone',
    'Track Title',
    'Track Category',
    'Monthly Fee',
    'Duration',
    'Transaction Reference ID',
    'Payment Screenshot Link',
    'City',
    'Education / Degree',
    'Portfolio / GitHub URL',
    'Resume Link',
    'Status'
  ];

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    setupSheetHeader(sheet, headers, '#064E43'); // Dark Emerald Header
  }

  // Handle Payment Receipt Screenshot Upload to Google Drive
  var screenshotUrl = data.screenshotUrl || 'Not provided';
  if (data.screenshotBase64) {
    try {
      screenshotUrl = saveImageToDrive(
        data.screenshotBase64,
        data.screenshotName || (data.applicationId + '-paid-receipt.png'),
        'ARAVEX Internship Receipts'
      );
    } catch (driveErr) {
      Logger.log('Drive upload error: ' + driveErr.toString());
      screenshotUrl = data.screenshotUrl || 'Upload Error: ' + driveErr.toString();
    }
  }

  var row = [
    data.timestamp || new Date().toLocaleString(),
    data.applicationId || ('ARVX-PAID-' + Math.floor(1000 + Math.random() * 9000)),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.trackTitle || '',
    data.category || '',
    data.fee || 'Rs. 5,000 / Month',
    data.duration || '3 Months',
    data.transactionId || 'N/A',
    screenshotUrl,
    data.city || 'N/A',
    data.education || 'N/A',
    data.portfolioUrl || '',
    data.resumeUrl || 'N/A',
    data.status || 'Pending Payment Verification'
  ];

  sheet.appendRow(row);
  formatLastRow(sheet);

  return { applicationId: data.applicationId, sheet: sheetName, screenshotUrl: screenshotUrl };
}

/**
 * ============================================================================
 * 3. UNPAID INTERNSHIPS SHEET
 * ============================================================================
 */
function handleUnpaidInternshipSubmission(ss, data) {
  var sheetName = 'Unpaid Internships';
  var sheet = ss.getSheetByName(sheetName);

  var headers = [
    'Timestamp',
    'Application ID',
    'Candidate Name',
    'Email Address',
    'WhatsApp / Phone',
    'Track Title',
    'Track Category',
    'Duration',
    'Education / Degree',
    'City',
    'Portfolio / GitHub URL',
    'Resume / Drive URL',
    'Experience Level',
    'Weekly Availability',
    'Motivation Statement',
    'Status'
  ];

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    setupSheetHeader(sheet, headers, '#1E293B'); // Slate Header
  }

  var row = [
    data.timestamp || new Date().toLocaleString(),
    data.applicationId || ('ARVX-UNP-' + Math.floor(1000 + Math.random() * 9000)),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.trackTitle || '',
    data.category || '',
    data.duration || '3 Months',
    data.education || 'N/A',
    data.city || 'N/A',
    data.portfolioUrl || '',
    data.resumeUrl || 'N/A',
    data.experienceLevel || '',
    data.availability || '',
    data.motivation || '',
    data.status || 'Under Portfolio Review'
  ];

  sheet.appendRow(row);
  formatLastRow(sheet);

  return { applicationId: data.applicationId, sheet: sheetName };
}

/**
 * ============================================================================
 * 4. CONTACT INQUIRIES SHEET + AUTOMATED EMAIL FORWARDING
 * ============================================================================
 */
function handleContactSubmission(ss, data) {
  var sheetName = 'Contact Inquiries';
  var sheet = ss.getSheetByName(sheetName);

  var headers = [
    'Timestamp',
    'Inquiry ID',
    'Client Name',
    'Client Email',
    'Company / Org',
    'Service Required',
    'Budget Range',
    'Reply Via Channel',
    'Project Scope & Brief',
    'Status'
  ];

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    setupSheetHeader(sheet, headers, '#0F172A'); // Midnight Navy Header
  }

  var inquiryId = data.inquiryId || ('ARVX-INQ-' + Math.floor(1000 + Math.random() * 9000));
  var row = [
    data.timestamp || new Date().toLocaleString(),
    inquiryId,
    data.name || '',
    data.email || '',
    data.company || 'N/A',
    data.service || 'General Inquiry',
    data.budget || 'Not specified',
    data.preferredContact || 'Email',
    data.description || '',
    data.status || 'New Lead'
  ];

  sheet.appendRow(row);
  formatLastRow(sheet);

  var targetEmail = data.forwardTo || 'info@aravextechstudio.com';

  // 1. Forward notification email to info@aravextechstudio.com with replyTo set to client
  try {
    var emailSubject = 'New Project Inquiry: ' + (data.name || 'Anonymous') + ' (' + (data.company || 'Direct') + ') [' + inquiryId + ']';
    var emailBody =
      'ARAVEX TECH STUDIO — NEW PROJECT INQUIRY\n\n' +
      'Inquiry Reference: ' + inquiryId + '\n' +
      'Client Name: ' + data.name + '\n' +
      'Client Email: ' + data.email + '\n' +
      'Phone / WhatsApp: ' + (data.phone || 'Not provided') + '\n' +
      'Company: ' + (data.company || 'N/A') + '\n' +
      'Service: ' + data.service + '\n' +
      'Estimated Budget: ' + (data.budget || 'Not specified') + '\n' +
      'Reply Via: ' + (data.preferredContact || 'Email') + '\n\n' +
      'Project Scope & Brief:\n' +
      data.description + '\n\n' +
      '---\n' +
      'Hit REPLY in your mail client to answer directly to ' + data.name + ' (' + data.email + ').';

    var htmlBody =
      '<div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif; max-width: 620px; color: #111; line-height: 1.5;">' +
      '<div style="background: #0f1114; padding: 18px 24px; border-radius: 12px 12px 0 0; border-bottom: 2px solid #10b981;">' +
      '<h2 style="color: #ffffff; margin: 0; font-size: 18px; letter-spacing: -0.02em;">ARAVEX TECH STUDIO • NEW INQUIRY</h2>' +
      '<span style="color: #10b981; font-size: 12px; font-weight: bold;">ID: ' + inquiryId + ' • Forwarded to ' + targetEmail + '</span>' +
      '</div>' +
      '<div style="background: #ffffff; padding: 24px; border: 1px solid #e4e4e7; border-top: none; border-radius: 0 0 12px 12px;">' +
      '<table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">' +
      '<tr><td style="padding: 7px 0; color: #64748b; width: 140px;">Client Name:</td><td style="font-weight: 600; color: #09090b;">' + (data.name || '') + '</td></tr>' +
      '<tr><td style="padding: 7px 0; color: #64748b;">Client Email:</td><td style="font-weight: 600;"><a href="mailto:' + (data.email || '') + '" style="color: #10b981;">' + (data.email || '') + '</a></td></tr>' +
      (data.phone ? '<tr><td style="padding: 7px 0; color: #64748b;">Phone / WhatsApp:</td><td style="color: #09090b; font-weight: 600;">' + data.phone + '</td></tr>' : '') +
      '<tr><td style="padding: 7px 0; color: #64748b;">Company:</td><td style="color: #09090b;">' + (data.company || 'N/A') + '</td></tr>' +
      '<tr><td style="padding: 7px 0; color: #64748b;">Service Practice:</td><td style="color: #09090b; font-weight: 600;">' + (data.service || '') + '</td></tr>' +
      '<tr><td style="padding: 7px 0; color: #64748b;">Budget Scope:</td><td style="color: #09090b;">' + (data.budget || 'Not specified') + '</td></tr>' +
      '<tr><td style="padding: 7px 0; color: #64748b;">Reply Via:</td><td style="color: #09090b; font-weight: 600;">' + (data.preferredContact || 'Email') + '</td></tr>' +
      '</table>' +
      '<h4 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Project Scope & Specifications:</h4>' +
      '<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; color: #1e293b; white-space: pre-wrap; line-height: 1.6;">' +
      (data.description || '').replace(/</g, '&lt;').replace(/>/g, '&gt;') +
      '</div>' +
      '<div style="margin-top: 24px; padding: 12px 16px; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; color: #065f46; font-size: 12px; font-weight: 600;">' +
      '✉️ Hit Reply in your email client to directly answer ' + (data.name || 'the client') + ' at ' + (data.email || '') + '.' +
      '</div>' +
      '</div>' +
      '</div>';

    MailApp.sendEmail({
      to: targetEmail,
      replyTo: data.email,
      subject: emailSubject,
      body: emailBody,
      htmlBody: htmlBody
    });
  } catch (mailErr) {
    Logger.log('MailApp forwarding error: ' + mailErr.toString());
  }

  // 2. Automated confirmation email to client with replyTo: info@aravextechstudio.com
  try {
    if (data.email && data.email.indexOf('@') > -1) {
      MailApp.sendEmail({
        to: data.email,
        replyTo: targetEmail,
        subject: 'Project Inquiry Received — ARAVEX Tech Studio [' + inquiryId + ']',
        body: 'Hello ' + data.name + ',\n\nThank you for submitting your project brief to ARAVEX Tech Studio. Your inquiry has been routed directly to our lead engineering group.\n\nWe typically review architectural requirements and respond within 4 to 24 business hours via ' + (data.preferredContact || 'Email') + '.\n\nBest regards,\nARAVEX Tech Studio Leadership\n' + targetEmail + '\nhttps://aravextechstudio.com',
        htmlBody:
          '<div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif; max-width: 580px; color: #111; line-height: 1.6;">' +
          '<div style="background: #0f1114; padding: 18px 24px; border-radius: 12px 12px 0 0; border-bottom: 2px solid #10b981;">' +
          '<h2 style="color: #ffffff; margin: 0; font-size: 18px;">ARAVEX TECH STUDIO</h2>' +
          '<span style="color: #94a3b8; font-size: 12px;">Inquiry Confirmation • Reference: ' + inquiryId + '</span>' +
          '</div>' +
          '<div style="background: #ffffff; padding: 24px; border: 1px solid #e4e4e7; border-top: none; border-radius: 0 0 12px 12px;">' +
          '<p>Hello <strong>' + data.name + '</strong>,</p>' +
          '<p>Thank you for submitting your specifications to <strong>ARAVEX Tech Studio</strong>. We have received your project inquiry for <strong>' + data.service + '</strong>.</p>' +
          '<p>Our founding systems architects will review your brief and reply via your preferred channel (<strong>' + (data.preferredContact || 'Email') + '</strong>) within <strong>4 to 24 business hours</strong>.</p>' +
          '<div style="background: #f8fafc; border-left: 3px solid #10b981; padding: 12px 16px; margin: 20px 0; font-size: 13px;">' +
          '<strong>Direct Reply Support:</strong> Simply reply directly to this email (<a href="mailto:' + targetEmail + '" style="color: #10b981;">' + targetEmail + '</a>) to add files, architectural diagrams, or updates to your brief.' +
          '</div>' +
          '<p style="color: #64748b; font-size: 12px; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 16px;">' +
          'ARAVEX Tech Studio • Systems Architecture & Production Engineering<br/>' +
          '<a href="https://aravextechstudio.com" style="color: #10b981;">https://aravextechstudio.com</a> • ' + targetEmail +
          '</p>' +
          '</div>' +
          '</div>'
      });
    }
  } catch (ackErr) {
    Logger.log('Client auto-acknowledgement error: ' + ackErr.toString());
  }

  return { inquiryId: inquiryId, sheet: sheetName, forwardedTo: targetEmail };
}

/**
 * ============================================================================
 * UTILITY HELPERS
 * ============================================================================
 */

function setupSheetHeader(sheet, headers, bgColor) {
  sheet.appendRow(headers);
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground(bgColor || '#0F1114');
  headerRange.setFontColor('#FFFFFF');
  headerRange.setFontWeight('bold');
  headerRange.setFontSize(10);
  headerRange.setHorizontalAlignment('center');
  headerRange.setWrap(true);
  sheet.setFrozenRows(1);
  sheet.setRowHeight(1, 35);

  for (var i = 1; i <= headers.length; i++) {
    sheet.setColumnWidth(i, 185);
  }
}

function formatLastRow(sheet) {
  var lastRow = sheet.getLastRow();
  var numCols = sheet.getLastColumn();
  if (lastRow > 1) {
    var range = sheet.getRange(lastRow, 1, 1, numCols);
    range.setFontSize(9);
    range.setVerticalAlignment('middle');
    if (lastRow % 2 === 0) {
      range.setBackground('#FBFBFA');
    } else {
      range.setBackground('#FFFFFF');
    }
  }
}

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

function createJsonResponse(data, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

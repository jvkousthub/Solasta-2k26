/**
 * Google Apps Script to send registration rejection emails
 * For SOLASTA 2026 - Wrong email registrations
 * 
 * Setup Instructions:
 * 1. Open your Google Sheet with rejected registrations
 * 2. Go to Extensions > Apps Script
 * 3. Paste this code and save
 * 4. Click Run to execute
 * 
 * Sheet Structure Required:
 * Column A: Name
 * Column B: Email
 * Column C: Status (will be updated after sending)
 */

function sendRejectionEmails() {
  // Get the active spreadsheet and Sheet2
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet2');
  
  if (!sheet) {
    Logger.log('Error: Sheet2 not found. Please make sure Sheet2 exists.');
    return;
  }
  
  // Get all data from the sheet (assuming headers in row 1)
  const dataRange = sheet.getDataRange();
  const data = dataRange.getValues();
  
  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;
  
  // Start from row 2 (skip headers)
  for (let i = 1; i < data.length; i++) {
    const name = data[i][0];
    const email = data[i][1];
    const status = data[i][2]; // Check if already sent
    
    // Skip if email is empty
    if (!email || email.toString().trim() === '') {
      Logger.log(`Row ${i + 1}: Skipped - Empty email`);
      skipCount++;
      continue;
    }
    
    // Skip if already sent
    if (status && status.toString().trim().toLowerCase() === "email sent") {
      Logger.log(`Row ${i + 1}: Skipped - Already sent to ${email}`);
      skipCount++;
      continue;
    }
    
    try {
      // Send the rejection email
      sendRejectionEmail(name, email);
      
      // Update status in sheet
      const statusCell = sheet.getRange(i + 1, 3);
      const timestampCell = sheet.getRange(i + 1, 4);
      
      statusCell.setValue("Email Sent");
      timestampCell.setValue(new Date());
      
      Logger.log(`Row ${i + 1}: Email sent successfully to ${name} (${email})`);
      successCount++;
      
      // Add a small delay to avoid hitting Gmail sending limits
      Utilities.sleep(1000);
      
    } catch (error) {
      Logger.log(`Row ${i + 1}: Error sending email to ${email}: ${error}`);
      sheet.getRange(i + 1, 3).setValue("Failed");
      sheet.getRange(i + 1, 4).setValue(error.toString());
      errorCount++;
    }
  }
  
  // Show completion message with summary
  const message = `Email sending complete!\n\nSuccessfully sent: ${successCount}\nSkipped: ${skipCount}\nFailed: ${errorCount}\n\nCheck the Status column for details.`;
  Logger.log(message);
}

function sendRejectionEmail(name, email) {
  const subject = "SOLASTA 2026 - Registration Update Required";
  
  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Montserrat', Arial, sans-serif;
      background-color: #000000;
      margin: 0;
      padding: 0;
    }
    .email-wrapper {
      max-width: 650px;
      margin: 0 auto;
      background-color: #000000;
    }
    .header-banner {
      width: 100%;
      max-width: 650px;
      height: auto;
      display: block;
      border: 0;
    }
    .container {
      max-width: 650px;
      margin: 0 auto;
      background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
      border: 3px solid #FF6B35;
      border-top: none;
      border-radius: 0 0 15px 15px;
      padding: 40px;
    }
    h1 {
      font-family: 'Oxanium', sans-serif;
      color: #FFA07A;
      font-size: 28px;
      text-transform: uppercase;
      margin: 0 0 20px 0;
      letter-spacing: 2px;
    }
    p {
      color: #E5E5E5;
      font-size: 16px;
      line-height: 1.8;
      margin: 15px 0;
    }
    .highlight {
      color: #FFA07A;
      font-weight: 700;
    }
    .important-box {
      background: rgba(255, 107, 53, 0.2);
      border-left: 5px solid #FFA07A;
      padding: 20px;
      margin: 25px 0;
      border-radius: 8px;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #FF6B35 0%, #FFA07A 100%);
      color: #ffffff !important;
      text-decoration: none;
      padding: 15px 40px;
      border-radius: 50px;
      font-weight: 700;
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 20px 0;
      text-align: center;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid rgba(255, 160, 122, 0.3);
      color: #AAAAAA;
      font-size: 14px;
      text-align: center;
    }
    .greeting {
      color: #FFA07A;
      font-weight: 700;
      font-size: 18px;
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #000000;">
  <div class="email-wrapper">
    <!-- Header Banner -->
    <img src="https://live.staticflickr.com/65535/55105858618_1db8e4e5ee_b.jpg" alt="Solasta 2026 Banner" class="header-banner" />
    
    <!-- Content Container -->
    <div class="container">
      <h1>⚠️ Registration Update Required</h1>
    
    <p class="greeting">Dear ${name},</p>
    
    <p>Thank you for your interest in <span class="highlight">SOLASTA 2026</span>!</p>
    
    <p>We noticed that you registered using a <span class="highlight">personal email address</span> (<strong style="color: #FFB347;">${email}</strong>). Unfortunately, we are unable to process your registration as we require all participants to register with their <span class="highlight">official institute email ID</span>.</p>
    
    <div class="important-box">
      <p style="margin: 0; font-weight: 700; color: #FFA07A; font-size: 18px;">📋 ACTION REQUIRED:</p>
      <p style="margin: 10px 0 0 0;">Please re-register using your <strong>official institute email address</strong> (e.g., rollno@iiitk.ac.in) to confirm your participation.</p>
    </div>
    
    <p><strong>Why do we need your institute email?</strong></p>
    <ul style="color: #E5E5E5; line-height: 1.8;">
      <li>To verify your student status</li>
      <li>To maintain authenticity of registrations</li>
      <li>To provide you with exclusive college fest benefits</li>
      <li>To ensure smooth communication and updates</li>
    </ul>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://solasta.iiitk.ac.in" class="cta-button">RE-REGISTER NOW</a>
    </div>
    
    <p><strong>Registration Steps:</strong></p>
    <ol style="color: #E5E5E5; line-height: 1.8;">
      <li>Visit <span class="highlight">solasta.iiitk.ac.in</span></li>
      <li>Click "Register Now"</li>
      <li>Use your <span class="highlight">institute email ID</span> only</li>
      <li>Complete your profile and select events</li>
    </ol>
    
    <p style="margin-top: 25px;">We apologize for any inconvenience. Once you re-register with your college email, your participation will be confirmed immediately!</p>
    
    <p>Looking forward to seeing you at <span class="highlight">SOLASTA 2026</span> – Where champions rise and memories are forged!</p>
    
    <p style="margin-top: 35px; color: #E5E5E5;">
      <strong>Regards,</strong><br>
      <span style="color: #FFA07A; font-weight: 600;">Tech Lead Solasta</span><br>
      <a href="mailto:123cs0074@iiitk.ac.in" style="color: #FFA07A; text-decoration: none;">123cs0074@iiitk.ac.in</a>
    </p>
    
    <div class="footer">
      <p style="font-weight: 700; color: #FFA07A; margin: 10px 0;">SOLASTA 2026</p>
      <p>IIITDM Kurnool | Feb 28 - Mar 01, 2026</p>
      <p>For queries: <a href="mailto:solasta@iiitk.ac.in" style="color: #FFA07A; text-decoration: none;">solasta@iiitk.ac.in</a></p>
      <p style="font-size: 12px; color: #888888; margin-top: 15px;">
        Indian Institute of Information Technology Design and Manufacturing Kurnool<br>
        Jagannathagattu, Dinnedevarapadu Village, Kurnool-518008
      </p>
    </div>
    </div>
</body>
</html>
  `;
  
  const plainTextBody = `
Dear ${name},

SOLASTA 2026 - Registration Update Required

Thank you for your interest in SOLASTA 2026!

We noticed that you registered using a personal email address (${email}). Unfortunately, we are unable to process your registration as we require all participants to register with their official institute email ID.

ACTION REQUIRED:
Please re-register using your official institute email address (e.g., rollno@iiitk.ac.in) to confirm your participation.

Why do we need your institute email?
- To verify your student status
- To maintain authenticity of registrations
- To provide you with exclusive college fest benefits
- To ensure smooth communication and updates

REGISTER NOW: https://solasta.iiitk.ac.in

Registration Steps:
1. Visit solasta.iiitk.ac.in
2. Click "Register Now"
3. Use your institute email ID only
4. Complete your profile and select events

We apologize for any inconvenience. Once you re-register with your college email, your participation will be confirmed immediately!

Looking forward to seeing you at SOLASTA 2026!

Regards,
Tech Lead Solasta
123cs0074@iiitk.ac.in

---
SOLASTA 2026
IIITDM Kurnool | Feb 28 - Mar 01, 2026
For queries: solasta@iiitk.ac.in

Indian Institute of Information Technology Design and Manufacturing Kurnool
Jagannathagattu, Dinnedevarapadu Village, Kurnool-518008
  `;
  
  // Send the email
  MailApp.sendEmail({
    to: email,
    subject: subject,
    htmlBody: htmlBody,
    body: plainTextBody,
    name: "JVK from Solasta"
  });
}

// onOpen menu removed.



/**
 * Preview function to test email with first row
 */
function previewEmail() {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet2');
    
    if (!sheet) {
      Logger.log('ERROR: Sheet2 not found');
      return;
    }
    
    const testName = sheet.getRange(2, 1).getValue();
    const testEmail = sheet.getRange(2, 2).getValue();
    
    Logger.log(`Test data: Name="${testName}", Email="${testEmail}"`);
    
    if (!testName || !testEmail) {
      Logger.log('ERROR: Missing test name or email in row 2');
      return;
    }
    
    // Send the email first
    Logger.log('Sending email...');
    sendRejectionEmail(testName, testEmail);
    Logger.log(`SUCCESS: Email sent to ${testEmail}`);
    
    // Mark as test sent
    Logger.log('Updating status...');
    sheet.getRange(2, 3).setValue("Test Sent");
    sheet.getRange(2, 4).setValue(new Date());
    SpreadsheetApp.flush();
    Logger.log('SUCCESS: Status updated');
    Logger.log(`Preview email sent to ${testEmail}. Row 2 updated. Check inbox & spam folder.`);
    
  } catch (error) {
    Logger.log(`FATAL ERROR in previewEmail: ${error}`);
    Logger.log(`Error stack: ${error.stack}`);
    
    try {
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet2');
      if (sheet) {
        sheet.getRange(2, 3).setValue("Failed");
        sheet.getRange(2, 4).setValue(error.toString().substring(0, 100));
        SpreadsheetApp.flush();
      }
    } catch (e) {
      Logger.log(`Could not update error status: ${e}`);
    }
    
    throw error; // Re-throw to show Google's error dialog
  }
}


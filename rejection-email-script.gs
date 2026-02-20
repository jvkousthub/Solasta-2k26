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
  // Get the active spreadsheet and sheet
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Get all data from the sheet (assuming headers in row 1)
  const dataRange = sheet.getDataRange();
  const data = dataRange.getValues();
  
  // Start from row 2 (skip headers)
  for (let i = 1; i < data.length; i++) {
    const name = data[i][0];
    const email = data[i][1];
    const status = data[i][2]; // Check if already sent
    
    // Skip if already sent or if email is empty
    if (status === "Email Sent" || !email) {
      continue;
    }
    
    try {
      // Send the rejection email
      sendRejectionEmail(name, email);
      
      // Update status in sheet
      sheet.getRange(i + 1, 3).setValue("Email Sent");
      sheet.getRange(i + 1, 4).setValue(new Date()); // Timestamp
      
      Logger.log(`Email sent to ${name} (${email})`);
      
      // Add a small delay to avoid hitting Gmail sending limits
      Utilities.sleep(1000);
      
    } catch (error) {
      Logger.log(`Error sending email to ${email}: ${error}`);
      sheet.getRange(i + 1, 3).setValue("Failed");
      sheet.getRange(i + 1, 4).setValue(error.toString());
    }
  }
  
  // Show completion message
  SpreadsheetApp.getUi().alert('Email sending complete! Check the Status column for results.');
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
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
      border: 3px solid #FF6B35;
      border-radius: 15px;
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
<body>
  <div class="container">
    <h1>⚠️ Registration Update Required</h1>
    
    <p class="greeting">Dear ${name},</p>
    
    <p>Thank you for your interest in <span class="highlight">SOLASTA 2026</span>!</p>
    
    <p>We noticed that you registered using a <span class="highlight">personal email address</span>. Unfortunately, we are unable to process your registration as we require all participants to register with their <span class="highlight">official college/institute email ID</span>.</p>
    
    <div class="important-box">
      <p style="margin: 0; font-weight: 700; color: #FFA07A; font-size: 18px;">📋 ACTION REQUIRED:</p>
      <p style="margin: 10px 0 0 0;">Please re-register using your <strong>official college/institute email address</strong> (e.g., yourname@college.edu.in) to confirm your participation.</p>
    </div>
    
    <p><strong>Why do we need your college email?</strong></p>
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
      <li>Use your <span class="highlight">college email ID</span> only</li>
      <li>Complete your profile and select events</li>
    </ol>
    
    <p style="margin-top: 25px;">We apologize for any inconvenience. Once you re-register with your college email, your participation will be confirmed immediately!</p>
    
    <p>Looking forward to seeing you at <span class="highlight">SOLASTA 2026</span> – Where champions rise and memories are forged!</p>
    
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

We noticed that you registered using a personal email address. Unfortunately, we are unable to process your registration as we require all participants to register with their official college/institute email ID.

ACTION REQUIRED:
Please re-register using your official college/institute email address (e.g., yourname@college.edu.in) to confirm your participation.

Why do we need your college email?
- To verify your student status
- To maintain authenticity of registrations
- To provide you with exclusive college fest benefits
- To ensure smooth communication and updates

REGISTER NOW: https://solasta.iiitk.ac.in

Registration Steps:
1. Visit solasta.iiitk.ac.in
2. Click "Register Now"
3. Use your college email ID only
4. Complete your profile and select events

We apologize for any inconvenience. Once you re-register with your college email, your participation will be confirmed immediately!

Looking forward to seeing you at SOLASTA 2026!

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
    name: "SOLASTA 2026 - IIITDM Kurnool"
  });
}

/**
 * Creates a custom menu when the spreadsheet opens
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('📧 SOLASTA Email Sender')
      .addItem('Send Rejection Emails', 'sendRejectionEmails')
      .addSeparator()
      .addItem('Preview Email (Test)', 'previewEmail')
      .addToUi();
}

/**
 * Preview function to test email with first row
 */
function previewEmail() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const testName = sheet.getRange(2, 1).getValue();
  const testEmail = sheet.getRange(2, 2).getValue();
  
  if (!testName || !testEmail) {
    SpreadsheetApp.getUi().alert('Please add test name and email in row 2 to preview.');
    return;
  }
  
  try {
    sendRejectionEmail(testName, testEmail);
    SpreadsheetApp.getUi().alert(`Preview email sent to ${testEmail}. Check your inbox!`);
  } catch (error) {
    SpreadsheetApp.getUi().alert(`Error: ${error.toString()}`);
  }
}

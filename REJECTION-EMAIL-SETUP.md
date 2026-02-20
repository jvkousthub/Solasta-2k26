# SOLASTA 2026 - Rejection Email Automation

## 📋 Setup Instructions

### Step 1: Prepare Your Google Sheet

Your Google Sheet should have this structure:

| Name | Email | Status | Timestamp |
|------|-------|--------|-----------|
| John Doe | john@gmail.com | | |
| Jane Smith | jane@yahoo.com | | |

- **Column A**: Name of the person
- **Column B**: Email address (personal email that was used)
- **Column C**: Status (will be auto-filled as "Email Sent" or "Failed")
- **Column D**: Timestamp (will be auto-filled with send time)

### Step 2: Add the Script to Google Sheets

1. Open your Google Sheet with the rejection list
2. Click **Extensions** → **Apps Script**
3. Delete any existing code in the editor
4. Copy and paste the entire code from `rejection-email-script.gs`
5. Click **Save** (💾 icon) and name the project "SOLASTA Email Sender"
6. Close the Apps Script tab

### Step 3: Authorize the Script

1. In your Google Sheet, refresh the page
2. You'll see a new menu **"📧 SOLASTA Email Sender"** appear
3. Click on it → **Send Rejection Emails**
4. First time: Google will ask for permissions
   - Click **Continue**
   - Select your Google account
   - Click **Advanced** → **Go to SOLASTA Email Sender (unsafe)**
   - Click **Allow**

### Step 4: Test Before Sending

1. Add YOUR email in row 2 to test
2. Click **📧 SOLASTA Email Sender** → **Preview Email (Test)**
3. Check your inbox to see how the email looks
4. If satisfied, proceed to send to all

### Step 5: Send to All

1. Make sure all names and emails are correctly entered
2. Click **📧 SOLASTA Email Sender** → **Send Rejection Emails**
3. Wait for the script to complete
4. Check the "Status" column - it will show "Email Sent" for successful sends
5. If any failed, the error will be shown in the Status column

## 🎯 Features

- ✅ Automatically sends styled HTML emails
- ✅ Tracks sent emails (won't send duplicates)
- ✅ Logs timestamp of each send
- ✅ Includes fallback plain text version
- ✅ Professional SOLASTA branding
- ✅ Clear instructions for re-registration
- ✅ Rate limiting to avoid Gmail limits

## ⚠️ Important Notes

1. **Gmail Sending Limits**:
   - Free Gmail: 100 emails/day
   - Google Workspace: 1,500 emails/day
   - The script includes 1-second delays between emails

2. **Don't Re-run on Same Data**:
   - The script checks "Status" column
   - Won't send to rows marked "Email Sent"
   - Safe to run multiple times

3. **Email Delivery**:
   - Emails may take a few minutes to arrive
   - Check spam folders if not received
   - Some email providers may delay bulk emails

## 🔧 Customization

### To Change Email Content:

Edit the `htmlBody` section in the script:
- Change colors: Edit hex codes like `#FFA07A`
- Update text: Modify content between `<p>` tags
- Change website link: Update `https://solasta.iiitk.ac.in`

### To Change Subject Line:

Find this line and edit:
```javascript
const subject = "SOLASTA 2026 - Registration Update Required";
```

## 📊 Monitoring

After sending, check your sheet:
- **Status = "Email Sent"**: Successfully delivered
- **Status = "Failed"**: Error occurred (message shown in Timestamp column)
- Empty Status: Not yet processed

## 🆘 Troubleshooting

### "Script doesn't appear in menu"
- Refresh the Google Sheet page
- Wait 30 seconds for the menu to load

### "Authorization Required" error
- Follow Step 3 again
- Make sure you clicked "Allow" for all permissions

### "Service invoked too many times" error
- You've hit Gmail's daily limit
- Wait 24 hours and continue
- Or use a Google Workspace account

### Emails going to spam
- Ask recipients to check spam folder
- Add "solasta@iiitk.ac.in" to their contacts

## 📧 Email Preview

The rejection email includes:
- Personalized greeting with their name
- Clear explanation of the issue
- Highlighted call-to-action button
- Step-by-step re-registration instructions
- Reasons why college email is required
- SOLASTA 2026 branding and contact info

## 🎨 Email Styling

The email matches your SOLASTA 2026 theme:
- Black background with orange (#FFA07A) accents
- Montserrat and Oxanium fonts
- Responsive design for mobile
- Professional layout with proper spacing

---

**Need Help?**
Contact: solasta@iiitk.ac.in

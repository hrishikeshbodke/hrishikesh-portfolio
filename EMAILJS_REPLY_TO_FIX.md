# EmailJS Template Configuration - Quick Fix

## 🎯 Problem

You're receiving emails FROM your own email address instead of the user's email.

## 💡 Why This Happens

**EmailJS CANNOT send emails FROM random email addresses** - that would be email spoofing and is blocked by all email providers. All emails will always come FROM your configured Gmail account.

## ✅ Solution

Configure the **Reply-To** field so when you click "Reply", it automatically goes to the user!

---

## 📝 Step-by-Step Fix

### 1. Open Your EmailJS Template

Go to: [https://dashboard.emailjs.com/admin/templates](https://dashboard.emailjs.com/admin/templates)

Click on your template to edit it.

---

### 2. Configure Settings Section

Scroll to the **Settings** section at the bottom of the template editor:

```
┌─────────────────────────────────────────┐
│ Settings                                │
├─────────────────────────────────────────┤
│ To Email*                               │
│ ┌─────────────────────────────────────┐ │
│ │ hrishikeshbodkeb@gmail.com          │ │ ← Your email (receives messages)
│ └─────────────────────────────────────┘ │
│                                         │
│ From Name                               │
│ ┌─────────────────────────────────────┐ │
│ │ {{from_name}}                       │ │ ← User's name appears as sender name
│ └─────────────────────────────────────┘ │
│                                         │
│ Reply To*  ⚠️ IMPORTANT!                │
│ ┌─────────────────────────────────────┐ │
│ │ {{from_email}}                      │ │ ← USER'S EMAIL - This is the key!
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

**Key Settings:**
- **To Email:** `hrishikeshbodkeb@gmail.com` (or your email)
- **From Name:** `{{from_name}}` (shows user's name)
- **Reply To:** `{{from_email}}` ⚠️ **MOST IMPORTANT!**

---

### 3. Update Email Template Body

Replace your current template with this (copy-paste the entire thing):

**Subject Line:**
```
New Contact: {{subject}}
```

**Email Body:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 20px; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
  
  <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
      <h1 style="margin: 0; color: white; font-size: 24px; font-weight: 600;">
        📧 New Contact Form Message
      </h1>
    </div>
    
    <!-- Sender Information - HIGHLIGHTED -->
    <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 25px; margin: 0;">
      <div style="background: rgba(255, 255, 255, 0.95); padding: 20px; border-radius: 10px;">
        <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          👤 Sender Information
        </h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600; width: 80px;">Name:</td>
            <td style="padding: 8px 0; color: #1f2937; font-size: 16px; font-weight: 600;">{{from_name}}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email:</td>
            <td style="padding: 8px 0;">
              <a href="mailto:{{from_email}}" style="color: #3b82f6; text-decoration: none; font-weight: 600; font-size: 16px;">
                {{from_email}}
              </a>
            </td>
          </tr>
        </table>
        
        <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px; margin-top: 15px; border-radius: 4px;">
          <p style="margin: 0; color: #92400e; font-size: 14px;">
            💡 <strong>Tip:</strong> Click the "Reply" button to respond directly to {{from_name}}
          </p>
        </div>
      </div>
    </div>
    
    <!-- Subject -->
    <div style="padding: 25px 25px 0 25px;">
      <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px; border-radius: 4px;">
        <p style="margin: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Subject</p>
        <p style="margin: 5px 0 0 0; color: #1f2937; font-size: 18px; font-weight: 600;">{{subject}}</p>
      </div>
    </div>
    
    <!-- Message Body -->
    <div style="padding: 25px;">
      <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 16px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
        💬 Message:
      </h3>
      <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
        <p style="margin: 0; color: #374151; line-height: 1.8; white-space: pre-wrap; font-size: 15px;">{{message}}</p>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="background: #f9fafb; padding: 20px 25px; border-top: 2px solid #e5e7eb;">
      <table style="width: 100%; color: #6b7280; font-size: 13px;">
        <tr>
          <td style="padding: 5px 0;">📅 Received:</td>
          <td style="padding: 5px 0; text-align: right; font-weight: 600;">Just now</td>
        </tr>
        <tr>
          <td style="padding: 5px 0;">🌐 Source:</td>
          <td style="padding: 5px 0; text-align: right; font-weight: 600;">Portfolio Contact Form</td>
        </tr>
        <tr>
          <td style="padding: 5px 0;">📮 Recipient:</td>
          <td style="padding: 5px 0; text-align: right; font-weight: 600;">{{to_email}}</td>
        </tr>
      </table>
      
      <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #d1d5db; text-align: center;">
        <p style="margin: 0; color: #3b82f6; font-weight: 600; font-size: 14px;">
          ⚡ Reply to this email to respond to {{from_name}}
        </p>
      </div>
    </div>
    
  </div>
  
  <!-- Powered by -->
  <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
    <p style="margin: 0;">Sent via EmailJS from Your Portfolio</p>
  </div>
  
</body>
</html>
```

---

### 4. Save and Test

1. Click **"Save"** button in EmailJS
2. Go back to your portfolio contact form
3. Fill form with test data:
   - Name: Test User
   - Email: testuser@example.com
   - Subject: Testing Reply-To
   - Message: This is a test message
4. Submit the form
5. Check your email inbox

---

## 🎯 What You Should See Now

### In Your Inbox:
```
From: hrishikeshbodkeb@gmail.com (Portfolio Contact)
To: hrishikeshbodkeb@gmail.com
Subject: New Contact: Testing Reply-To

[Beautiful formatted email showing:]
- Sender Name: Test User
- Sender Email: testuser@example.com (clickable)
- Subject: Testing Reply-To
- Message: This is a test message
```

### When You Click "Reply":
```
To: testuser@example.com  ← ✅ This is what you want!
```

**Perfect!** Now when you reply, it goes directly to the user who filled the form.

---

## 🔧 Troubleshooting

### Still showing your email in Reply?

1. **Clear EmailJS cache:**
   - Go to: https://dashboard.emailjs.com/admin/templates
   - Open your template
   - Click "Test It"
   - Send a test email
   - Verify Reply-To field shows: `{{from_email}}`

2. **Check browser cache:**
   - Hard refresh your portfolio: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
   - Clear browser cache
   - Test again

3. **Verify template variables:**
   - Make sure you're using: `{{from_email}}` (with double curly braces)
   - NOT: `{from_email}` or `$from_email`

4. **Check email client:**
   - Gmail web interface shows Reply-To correctly
   - Some email clients might not show Reply-To until you click Reply
   - Try clicking the Reply button to verify it works

---

## 📊 Technical Explanation

**Why all emails come FROM your email:**

Email providers (Gmail, Outlook, etc.) require **authentication** to send emails. You can't just send an email claiming to be from any random email address - that would be spoofing.

**How Reply-To solves this:**

The **Reply-To** header is a standard email header that tells email clients "when the user clicks Reply, use this address instead of the From address."

**Flow:**
1. User fills form with their email: `user@example.com`
2. EmailJS sends email:
   - FROM: `your-gmail@gmail.com` (authenticated)
   - TO: `your-gmail@gmail.com` (you receive it)
   - REPLY-TO: `user@example.com` (clicked when replying)
3. Email body shows: User's name and email prominently
4. You click Reply → automatically addresses `user@example.com`

---

## ✅ Summary

**What Changed in Your Code:**
- Added `reply_to`, `to_name`, and `to_email` parameters
- These provide more context to EmailJS template

**What You Need to Do:**
1. Update EmailJS template Reply-To field: `{{from_email}}`
2. Use the new HTML template (copy-paste from above)
3. Save and test
4. When you receive an email, click Reply - it should go to the user's email!

**Expected Result:**
- ✅ Beautiful formatted emails
- ✅ User's info prominently displayed
- ✅ Click Reply → automatically goes to user
- ✅ No more confusion about sender email

---

**Need more help?** Check the main [EMAILJS_SETUP_GUIDE.md](EMAILJS_SETUP_GUIDE.md)

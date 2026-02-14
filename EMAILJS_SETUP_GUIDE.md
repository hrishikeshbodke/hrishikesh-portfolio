# EmailJS Setup Guide - Step by Step

This guide will walk you through setting up EmailJS for your Angular portfolio contact form.

## 📋 Overview

EmailJS allows you to send emails directly from your browser without a backend server. Perfect for portfolio contact forms!

---

## 🚀 Step-by-Step Setup Instructions

### Step 1: Create EmailJS Account (Already Done ✓)

You mentioned you already created an EmailJS account. Great! If not, sign up at [https://www.emailjs.com/](https://www.emailjs.com/)

---

### Step 2: Add Your Email Service

1. **Log in to EmailJS Dashboard:**
   - Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)

2. **Navigate to Email Services:**
   - Click on **"Email Services"** in the left sidebar
   - Click **"Add New Service"** button

3. **Choose Your Email Provider:**
   - Select your email provider (Gmail, Outlook, Yahoo, etc.)
   - For Gmail (recommended):
     - Click on **"Gmail"**
     - Click **"Connect Account"**
     - Sign in with your Gmail account
     - Grant permissions

4. **Configure Service:**
   - Give your service a name (e.g., "Portfolio Gmail")
   - Click **"Create Service"**
   - **SAVE YOUR SERVICE ID** (you'll need this later!)
   - It looks like: `service_xxxxxxx`

**Important Notes for Gmail:**
- If using Gmail, you may need to enable "Less secure app access" or use an App Password
- For better security, create an App Password:
  1. Go to Google Account settings
  2. Security → 2-Step Verification → App passwords
  3. Generate a new app password for "Mail"
  4. Use this password in EmailJS

---

### Step 3: Create Email Template

1. **Navigate to Email Templates:**
   - Click on **"Email Templates"** in the left sidebar
   - Click **"Create New Template"**

2. **Design Your Template:**
   
   **Subject Line:**
   ```
   New Contact Form Submission: {{subject}}
   ```

   **Email Body (HTML):**
   ```html
   <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
     <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
       New Contact Form Submission
     </h2>
     
     <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
       <p><strong>From:</strong> {{from_name}}</p>
       <p><strong>Email:</strong> <a href="mailto:{{from_email}}">{{from_email}}</a></p>
       <p><strong>Subject:</strong> {{subject}}</p>
     </div>
     
     <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
       <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
       <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
     </div>
     
     <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
       <p>This email was sent from your portfolio contact form.</p>
       <p>Reply directly to this email to respond to {{from_name}}.</p>
     </div>
   </div>
   ```

3. **Configure Reply-To:**
   - In the template settings, find **"From Email"** section
   - Set **"Reply To"** to: `{{from_email}}`
   - This allows you to reply directly to the sender!

4. **Configure Recipient:**
   - Set **"To Email"** to your email address (where you want to receive messages)

5. **Test Your Template:**
   - Click **"Test It"** button
   - Fill in sample values:
     - `from_name`: John Doe
     - `from_email`: john@example.com
     - `subject`: Test Subject
     - `message`: This is a test message
   - Click **"Send Test Email"**
   - Check your inbox!

6. **Save Template:**
   - Click **"Save"**
   - **SAVE YOUR TEMPLATE ID** (you'll need this!)
   - It looks like: `template_xxxxxxx`

---

### Step 4: Get Your Public Key

1. **Navigate to Account Settings:**
   - Click on **"Account"** in the left sidebar
   - Or go to: [https://dashboard.emailjs.com/admin/account](https://dashboard.emailjs.com/admin/account)

2. **Find Public Key:**
   - Look for **"Public Key"** or **"User ID"** section
   - **COPY YOUR PUBLIC KEY**
   - It looks like: `xxxxxxxxxxxxxxx` (15-20 characters)

---

### Step 5: Update Your Angular Application

Now update the credentials in your Angular app:

1. **Open the Email Service file:**
   - Navigate to: `src/app/core/services/email.service.ts`

2. **Update the following three values:**

   ```typescript
   // Replace these with your actual values from EmailJS Dashboard:
   
   private readonly PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';
   // ↑ Paste your Public Key from Step 4
   
   private readonly SERVICE_ID = 'YOUR_SERVICE_ID_HERE';
   // ↑ Paste your Service ID from Step 2
   
   private readonly TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE';
   // ↑ Paste your Template ID from Step 3
   ```

3. **Example with real values:**
   ```typescript
   private readonly PUBLIC_KEY = 'xYz123ABcDeFgHiJ';
   private readonly SERVICE_ID = 'service_abc1234';
   private readonly TEMPLATE_ID = 'template_xyz5678';
   ```

4. **Save the file!**

---

### Step 6: Test Your Contact Form

1. **Start your Angular development server:**
   ```bash
   npm start
   ```
   or
   ```bash
   ng serve
   ```

2. **Open your browser:**
   - Navigate to: `http://localhost:4200`

3. **Go to the Contact section:**
   - Scroll down to the contact form

4. **Fill out the form:**
   - Name: Your Name
   - Email: your-email@example.com
   - Subject: Test Message
   - Message: Testing EmailJS integration!

5. **Submit the form:**
   - Click "Send Message"
   - Wait for the success message
   - Check your email inbox!

6. **Verify in EmailJS Dashboard:**
   - Go to: [https://dashboard.emailjs.com/admin/history](https://dashboard.emailjs.com/admin/history)
   - You should see your email in the history

---

## 🔍 Troubleshooting

### Problem: "Email service not configured" warning

**Solution:**
- Make sure you updated all three credentials in `email.service.ts`
- Remove the placeholder text: `YOUR_PUBLIC_KEY_HERE`
- Save the file and refresh your browser

---

### Problem: Email not sending (error message appears)

**Possible Solutions:**

1. **Check Console for Errors:**
   - Open Browser Developer Tools (F12)
   - Look at the Console tab for error messages

2. **Verify Credentials:**
   - Double-check your Public Key, Service ID, and Template ID
   - Make sure there are no extra spaces or quotes

3. **Check EmailJS Dashboard:**
   - Go to Email History: [https://dashboard.emailjs.com/admin/history](https://dashboard.emailjs.com/admin/history)
   - Look for error messages

4. **Template Variable Names:**
   - Make sure your template uses these exact variable names:
     - `{{from_name}}`
     - `{{from_email}}`
     - `{{subject}}`
     - `{{message}}`

5. **Email Service Connection:**
   - Go to Email Services in dashboard
   - Click on your service
   - Make sure it's connected (green checkmark)
   - If disconnected, reconnect your email account

---

### Problem: Emails going to Spam

**Solution:**
- This is normal for new EmailJS accounts
- Mark the first email as "Not Spam"
- After a few emails, they should arrive in your inbox
- Consider setting up SPF and DKIM records (advanced)

---

### Problem: Rate Limit Exceeded

**Solution:**
- Free EmailJS accounts have rate limits (200 emails/month)
- If you exceed this, upgrade to a paid plan
- Or wait until next month

---

## 📊 EmailJS Free Plan Limits

- **200 emails per month**
- **2 email services**
- **2 email templates**
- Email history: 1 month
- Support: Community

If you need more, check out their paid plans: [https://www.emailjs.com/pricing](https://www.emailjs.com/pricing)

---

## 🎨 Customization Options

### Customize Email Template

You can customize the email template design in EmailJS Dashboard:
- Change colors
- Add your logo
- Modify layout
- Add additional fields

### Add More Form Fields

To add more fields to your contact form:

1. **Update the ContactForm model** in `src/app/core/models/profile.model.ts`:
   ```typescript
   export interface ContactForm {
     name: string;
     email: string;
     subject: string;
     message: string;
     phone?: string;        // Add new field
     company?: string;      // Add new field
   }
   ```

2. **Update the form template** in `contact.component.ts` - add new input fields

3. **Update the EmailJS template** in EmailJS Dashboard - add new variables:
   ```html
   <p><strong>Phone:</strong> {{phone}}</p>
   <p><strong>Company:</strong> {{company}}</p>
   ```

4. **Update the templateParams** in `contact.component.ts`:
   ```typescript
   const templateParams = {
     from_name: this.formData.name,
     from_email: this.formData.email,
     subject: this.formData.subject,
     message: this.formData.message,
     phone: this.formData.phone,      // Add new field
     company: this.formData.company   // Add new field
   };
   ```

---

## 🔒 Security Best Practices

1. **Never commit sensitive credentials to GitHub:**
   - Consider using environment variables for production
   - The Public Key can be exposed (it's meant to be public)
   - But keep your email account credentials private

2. **Enable CAPTCHA (optional but recommended):**
   - Go to EmailJS Dashboard → Account → Security
   - Enable reCAPTCHA to prevent spam
   - Follow their integration guide: [https://www.emailjs.com/docs/user-guide/adding-captcha-verification/](https://www.emailjs.com/docs/user-guide/adding-captcha-verification/)

3. **Set up email filters:**
   - Create filters in your email to organize portfolio messages
   - Example: Label all emails with "Portfolio Contact"

---

## 📚 Additional Resources

- **EmailJS Documentation:** [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **EmailJS Dashboard:** [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
- **EmailJS Angular Guide:** [https://www.emailjs.com/docs/examples/angular/](https://www.emailjs.com/docs/examples/angular/)
- **Email History:** [https://dashboard.emailjs.com/admin/history](https://dashboard.emailjs.com/admin/history)

---

## ✅ Quick Reference - Your Credentials

Fill this out as you go through the setup:

```
Public Key: _______________________________
Service ID: service________________________
Template ID: template______________________
Your Email: _______________________________
```

---

## 🎉 You're All Set!

Once you've completed all steps and tested your contact form, you're ready to deploy!

Your contact form will now send real emails directly from your portfolio website.

**Need Help?**
- Check the Troubleshooting section above
- Review the EmailJS documentation
- Check browser console for error messages
- Verify all credentials are correct

---

## 📝 Summary of Files Modified

1. **Created:** `src/app/core/services/email.service.ts`
   - EmailJS integration service with detailed comments
   
2. **Updated:** `src/app/components/contact/contact.component.ts`
   - Integrated EmailJS for actual email sending
   - Added error handling and success messages
   - Added configuration validation

3. **Installed:** `@emailjs/browser` package
   - EmailJS browser SDK

---

**Happy Coding! 🚀**

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { EmailService } from '../../core/services/email.service';
import { Profile, ContactForm } from '../../core/models/profile.model';
import { fadeInUp, slideInLeft, slideInRight } from '../../core/animations/animations';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  animations: [fadeInUp, slideInLeft, slideInRight],
  template: `
    <section class="contact" id="contact">
      <div class="container">
        <div class="section-header" @fadeInUp>
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">Let's build something amazing together</p>
        </div>

        <div class="contact-content">
          <div class="contact-info" @slideInLeft>
            <div class="info-card">
              <h3>Contact Information</h3>
              <p class="info-description">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and development.
              </p>

              <div class="info-items">
                <div class="info-item">
                  <div class="info-icon">📧</div>
                  <div class="info-content">
                    <h4>Email</h4>
                    <a [href]="'mailto:' + profile.email">{{ profile.email }}</a>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">🏢</div>
                  <div class="info-content">
                    <h4>Organization</h4>
                    <p>{{ profile.organization }}</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">💼</div>
                  <div class="info-content">
                    <h4>LinkedIn</h4>
                    <a [href]="profile.linkedin" target="_blank">Connect on LinkedIn</a>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">💻</div>
                  <div class="info-content">
                    <h4>GitHub</h4>
                    <a [href]="profile.github" target="_blank">View GitHub Profile</a>
                  </div>
                </div>
              </div>

              <div class="availability">
                <div class="status-indicator"></div>
                <p>Ready for the next big opportunity to elevate my career</p>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper" @slideInRight>
            <form class="contact-form" (ngSubmit)="submitForm()" #contactFormRef="ngForm">
              <div class="form-group">
                <label for="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  placeholder="Your full name"
                  class="form-control"
                />
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  email
                  placeholder="your.email@example.com"
                  class="form-control"
                />
              </div>

              <div class="form-group">
                <label for="subject">Subject *</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required
                  placeholder="What's this about?"
                  class="form-control"
                />
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  rows="6"
                  placeholder="Tell me about you or inquiry..."
                  class="form-control"
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="submit-btn"
                [disabled]="!contactFormRef.form.valid || isSubmitting">
                <span *ngIf="!isSubmitting">Send Message</span>
                <span *ngIf="isSubmitting">Sending...</span>
              </button>

              <!-- Success message when email is sent successfully -->
              <div class="form-message success" *ngIf="submitSuccess">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>

              <!-- Error message if email sending fails -->
              <div class="form-message error" *ngIf="submitError">
                ✗ {{ errorMessage }}
              </div>

              <!-- Warning if EmailJS is not configured properly -->
              <div class="form-message warning" *ngIf="!isEmailConfigured">
                ⚠️ Email service not configured. Please update credentials in email.service.ts
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 6rem 2rem;
      background: #0f172a;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-size: 3rem;
      font-weight: 800;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.5rem;
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: #94a3b8;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 3rem;
    }

    .info-card {
      background: linear-gradient(135deg, #1e293b, #334155);
      padding: 2.5rem;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      height: fit-content;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    }

    .info-card h3 {
      font-size: 1.8rem;
      color: white;
      margin-bottom: 1rem;
    }

    .info-description {
      color: #cbd5e1;
      line-height: 1.7;
      margin-bottom: 2rem;
    }

    .info-items {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .info-item {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .info-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }

    .info-content h4 {
      color: #94a3b8;
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
      font-weight: 600;
    }

    .info-content p,
    .info-content a {
      color: white;
      margin: 0;
      font-weight: 500;
    }

    .info-content a {
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .info-content a:hover {
      color: #3b82f6;
    }

    .availability {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: rgba(16, 185, 129, 0.1);
      border-radius: 8px;
      border-left: 4px solid #10b981;
    }

    .status-indicator {
      width: 10px;
      height: 10px;
      background: #10b981;
      border-radius: 50%;
      animation: pulse-dot 2s ease-in-out infinite;
    }

    @keyframes pulse-dot {
      0%, 100% { opacity: 1; box-shadow: 0 0 10px #10b981; }
      50% { opacity: 0.5; box-shadow: 0 0 20px #10b981; }
    }

    .availability p {
      color: #6ee7b7;
      margin: 0;
      font-weight: 600;
    }

    .contact-form-wrapper {
      background: rgba(30, 41, 59, 0.6);
      padding: 2.5rem;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      color: #cbd5e1;
      font-weight: 600;
      font-size: 0.95rem;
    }

    .form-control {
      padding: 0.875rem 1rem;
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      color: white;
      font-size: 1rem;
      font-family: inherit;
      transition: all 0.3s ease;
    }

    .form-control:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }

    .form-control::placeholder {
      color: #64748b;
    }

    textarea.form-control {
      resize: vertical;
      min-height: 120px;
    }

    .submit-btn {
      padding: 1rem 2rem;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .form-message {
      padding: 1rem;
      border-radius: 8px;
      font-weight: 500;
    }

    .form-message.success {
      background: rgba(16, 185, 129, 0.15);
      color: #6ee7b7;
      border: 1px solid #10b981;
    }

    .form-message.error {
      background: rgba(239, 68, 68, 0.1);
      color: #ef4444;
      border: 1px solid rgba(239, 68, 68, 0.3);
    }

    .form-message.warning {
      background: rgba(251, 191, 36, 0.1);
      color: #fbbf24;
      border: 1px solid rgba(251, 191, 36, 0.3);
    }

    .form-message.info {
      background: rgba(59, 130, 246, 0.1);
      color: #60a5fa;
      border: 1px solid rgba(59, 130, 246, 0.3);
      font-size: 0.9rem;
    }

    @media (max-width: 1024px) {
      .contact-content {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .contact {
        padding: 4rem 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .info-card,
      .contact-form-wrapper {
        padding: 1.75rem;
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  profile!: Profile;
  
  // Form state management flags
  isSubmitting = false;        // Shows loading state while sending email
  submitSuccess = false;       // Shows success message when email is sent
  submitError = false;         // Shows error message if sending fails
  errorMessage = '';           // Detailed error message to display
  isEmailConfigured = false;   // Checks if EmailJS is properly configured
  
  // Form data model - bound to the template with ngModel
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  /**
   * Constructor - Inject required services
   * @param portfolioData - Service to get profile information
   * @param emailService - Service to handle email sending via EmailJS
   */
  constructor(
    private portfolioData: PortfolioDataService,
    private emailService: EmailService
  ) {}

  /**
   * Component initialization
   * Runs when the component is first loaded
   */
  ngOnInit(): void {
    // Get profile data from the service
    this.profile = this.portfolioData.getProfile();
    
    // Check if EmailJS is properly configured
    this.isEmailConfigured = this.emailService.isConfigured();
    
    // Log configuration status for debugging
    if (!this.isEmailConfigured) {
      console.warn('⚠️ EmailJS not configured. Please update credentials in email.service.ts');
      console.log('Configuration status:', this.emailService.getConfigStatus());
    }
  }

  /**
   * Handle form submission
   * Sends email using EmailJS service
   */
  async submitForm(): Promise<void> {
    // Check if EmailJS is configured before attempting to send
    if (!this.isEmailConfigured) {
      this.submitError = true;
      this.errorMessage = 'Email service is not configured. Please contact the administrator.';
      return;
    }

    // Reset previous states
    this.submitSuccess = false;
    this.submitError = false;
    this.isSubmitting = true;

    try {
      // Prepare template parameters for EmailJS
      // Combine all form data into a formatted message body
      const formattedMessage = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 SENDER INFORMATION:
───────────────────────────────────────
Name:    ${this.formData.name}
Email:   ${this.formData.email}
Subject: ${this.formData.subject}

💬 MESSAGE:
───────────────────────────────────────
${this.formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 Received: ${new Date().toLocaleString()}
🌐 Source: Portfolio Contact Form
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `.trim();

      // Template parameters for EmailJS
      const templateParams = {
        from_name: this.formData.name,      // Sender's name
        from_email: this.formData.email,    // Sender's email (will be used as Reply-To)
        subject: this.formData.subject,     // Email subject
        message: formattedMessage,          // Formatted message with all details
        to_name: this.profile.name,         // Your name (recipient)
        to_email: this.profile.email,       // Your email (recipient)
        reply_to: this.formData.email       // Explicitly set reply-to address
      };

      console.log('📧 Sending email with data:', templateParams);

      // Send email using EmailJS service
      await this.emailService.sendEmail(templateParams);

      // Email sent successfully!
      console.log('✓ Email sent successfully');
      this.submitSuccess = true;
      this.isSubmitting = false;

      // Reset the form after 3 seconds
      setTimeout(() => {
        this.submitSuccess = false;
        this.resetForm();
      }, 3000);

    } catch (error: any) {
      // Email sending failed
      console.error('✗ Failed to send email:', error);
      this.isSubmitting = false;
      this.submitError = true;

      // Set user-friendly error message
      if (error.text) {
        this.errorMessage = `Failed to send email: ${error.text}`;
      } else if (error.message) {
        this.errorMessage = error.message;
      } else {
        this.errorMessage = 'Failed to send email. Please try again or contact me directly.';
      }

      // Hide error message after 5 seconds
      setTimeout(() => {
        this.submitError = false;
      }, 5000);
    }
  }

  /**
   * Reset form data to initial state
   * Called after successful submission
   */
  private resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}

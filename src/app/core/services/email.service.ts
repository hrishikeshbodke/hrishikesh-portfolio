import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

/**
 * Email Service - Handles email sending functionality using EmailJS
 * 
 * This service integrates with EmailJS to send emails directly from the browser
 * without needing a backend server. Perfect for portfolio contact forms!
 */
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  // ============================================
  // EmailJS Configuration
  // ============================================
  // TODO: Replace these with your actual EmailJS credentials
  // Get them from: https://dashboard.emailjs.com/
  
  /**
   * Your EmailJS Public Key (User ID)
   * Find it at: https://dashboard.emailjs.com/admin/account
   */
  //private readonly PUBLIC_KEY: string = 'YOUR_PUBLIC_KEY_HERE';
  private readonly PUBLIC_KEY: string = '4NP_fmKPL3Zj5Iilr';

  
  /**
   * Your EmailJS Service ID
   * Find it at: https://dashboard.emailjs.com/admin
   * This is the email service you configured (Gmail, Outlook, etc.)
   */
//   private readonly SERVICE_ID: string = 'YOUR_SERVICE_ID_HERE';
  private readonly SERVICE_ID: string = 'service_u4smh9j';


  
  /**
   * Your EmailJS Template ID
   * Find it at: https://dashboard.emailjs.com/admin/templates
   * This is the email template you created
   */
  //private readonly TEMPLATE_ID: string = 'YOUR_TEMPLATE_ID_HERE';
  private readonly TEMPLATE_ID: string = 'template_ve88fcm';


  constructor() {
    // Initialize EmailJS with your public key
    // This is required before sending any emails
    this.initializeEmailJS();
  }

  /**
   * Initialize EmailJS with your public key
   * This method is called automatically when the service is created
   */
  private initializeEmailJS(): void {
    try {
      emailjs.init(this.PUBLIC_KEY);
      console.log('✓ EmailJS initialized successfully');
    } catch (error) {
      console.error('✗ Failed to initialize EmailJS:', error);
    }
  }

  /**
   * Send email using EmailJS
   * 
   * @param templateParams - Object containing the form data to send
   * @returns Promise<EmailJSResponseStatus> - Response from EmailJS API
   * 
   * Example usage:
   * this.emailService.sendEmail({
   *   from_name: 'John Doe',
   *   from_email: 'john@example.com',
   *   subject: 'Project Inquiry',
   *   message: 'I would like to discuss...'
   * });
   */
  async sendEmail(templateParams: {
    from_name: string;
    from_email: string;
    subject: string;
    message: string;
  }): Promise<EmailJSResponseStatus> {
    try {
      console.log('📧 Attempting to send email...');
      console.log('Template parameters:', templateParams);

      // Send email using EmailJS
      // Parameters: SERVICE_ID, TEMPLATE_ID, template parameters
      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams
      );

      console.log('✓ Email sent successfully!', response);
      return response;
      
    } catch (error) {
      console.error('✗ Failed to send email:', error);
      throw error;
    }
  }

  /**
   * Alternative method: Send email with custom service and template IDs
   * Useful if you want to use different email services or templates
   * for different purposes
   * 
   * @param serviceId - EmailJS service ID
   * @param templateId - EmailJS template ID
   * @param templateParams - Form data to send
   */
  async sendEmailCustom(
    serviceId: string,
    templateId: string,
    templateParams: Record<string, unknown>
  ): Promise<EmailJSResponseStatus> {
    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );
      return response;
    } catch (error) {
      console.error('Failed to send email with custom settings:', error);
      throw error;
    }
  }

  /**
   * Validate if EmailJS is properly configured
   * Returns true if all required credentials are set
   * 
   * Use this method to check if the service is ready before sending emails
   */
  isConfigured(): boolean {
    const isConfigured = 
      this.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE' &&
      this.SERVICE_ID !== 'YOUR_SERVICE_ID_HERE' &&
      this.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID_HERE' &&
      this.PUBLIC_KEY.length > 0 &&
      this.SERVICE_ID.length > 0 &&
      this.TEMPLATE_ID.length > 0;

    if (!isConfigured) {
      console.warn('⚠️ EmailJS is not configured properly. Please update the credentials in email.service.ts');
    }

    return isConfigured;
  }

  /**
   * Get current configuration status (useful for debugging)
   */
  getConfigStatus(): {
    publicKey: boolean;
    serviceId: boolean;
    templateId: boolean;
    fullyConfigured: boolean;
  } {
    return {
      publicKey: this.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE' && this.PUBLIC_KEY.length > 0,
      serviceId: this.SERVICE_ID !== 'YOUR_SERVICE_ID_HERE' && this.SERVICE_ID.length > 0,
      templateId: this.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID_HERE' && this.TEMPLATE_ID.length > 0,
      fullyConfigured: this.isConfigured()
    };
  }
}

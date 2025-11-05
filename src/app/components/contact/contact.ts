import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  // EmailJS Configuration
  private emailjsConfig = {
    serviceId: 'service_0opy4c7',
    templateId: 'template_t1vb2jp',
    publicKey: 'S_t0u2BbVj6zMecZE'
  };

  async onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitMessage = '';

    try {
      // Initialize EmailJS with your public key
      emailjs.init(this.emailjsConfig.publicKey);

      // Send email using EmailJS
      const response = await emailjs.send(
        this.emailjsConfig.serviceId,
        this.emailjsConfig.templateId,
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message,
          to_email: 'abdellahiahmedahmedbaba@gmail.com' // Your temporary email
        }
      );

      console.log('Email sent successfully!', response);
      this.submitSuccess = true;
      this.submitMessage = 'Thank you for your message! We will get back to you soon.';

      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      // Clear success message after 5 seconds
      setTimeout(() => {
        this.submitMessage = '';
        this.submitSuccess = false;
      }, 5000);

    } catch (error) {
      console.error('Failed to send email:', error);
      this.submitSuccess = false;
      this.submitMessage = 'Failed to send message. Please try again or contact us directly at contact@progertechnology.com';

      // Clear error message after 5 seconds
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}

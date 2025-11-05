import { Component, OnInit } from '@angular/core';
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
export class ContactComponent implements OnInit {
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

  ngOnInit() {
    // Initialize EmailJS once when component loads
    emailjs.init(this.emailjsConfig.publicKey);
  }

  async onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitMessage = '';

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        this.emailjsConfig.serviceId,
        this.emailjsConfig.templateId,
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message
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

    } catch (error: any) {
      console.error('Failed to send email:', error);
      this.submitSuccess = false;

      // More detailed error message
      let errorMsg = 'Failed to send message. ';
      if (error.text) {
        errorMsg += `Error: ${error.text}. `;
      }
      errorMsg += 'Please try again or contact us directly at contact@progertechnology.com';

      this.submitMessage = errorMsg;

      // Clear error message after 8 seconds for longer error messages
      setTimeout(() => {
        this.submitMessage = '';
      }, 8000);
    } finally {
      this.isSubmitting = false;
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  values = [
    {
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </svg>`,
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the curve.'
    },
    {
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
        <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
      title: 'Reliability',
      description: 'We build lasting relationships through consistent delivery, transparent communication, and unwavering commitment to our promises.'
    },
    {
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </svg>`,
      title: 'Excellence',
      description: 'We pursue the highest standards in everything we do, from code quality to customer service, ensuring exceptional results every time.'
    },
    {
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="2"/>
        <path d="M7 11V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V11" stroke="currentColor" stroke-width="2"/>
      </svg>`,
      title: 'Security',
      description: 'We prioritize the security and privacy of our clients\' data, implementing robust measures to protect against evolving threats.'
    },
    {
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" stroke-width="2"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
        <path d="M23 21V19C23 17.1362 21.7252 15.5701 20 15.126" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M16 3.12602C17.7252 3.57006 19 5.13616 19 7C19 8.86384 17.7252 10.4299 16 10.874" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, combining our expertise with their vision to achieve remarkable outcomes together.'
    },
    {
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      title: 'Integrity',
      description: 'We conduct business with honesty and transparency, building trust through ethical practices and genuine care for our clients\' success.'
    }
  ];

  stats = [
    {
      number: '50+',
      label: 'Projects Delivered'
    },
    {
      number: '30+',
      label: 'Happy Clients'
    },
    {
      number: '100%',
      label: 'Client Satisfaction'
    },
    {
      number: '5+',
      label: 'Years of Excellence'
    }
  ];
}

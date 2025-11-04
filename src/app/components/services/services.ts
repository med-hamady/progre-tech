import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class ServicesComponent {
  services = [
    {
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path d="M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z" stroke="currentColor" stroke-width="2"/>
        <path d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z" stroke="currentColor" stroke-width="2"/>
        <path d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-width="2"/>
        <path d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z" stroke="currentColor" stroke-width="2"/>
      </svg>`,
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies and best practices to meet your unique business requirements.',
      features: [
        'Web Applications',
        'Mobile Apps (iOS & Android)',
        'Enterprise Software',
        'API Development'
      ],
      link: '#contact'
    },
    {
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </svg>`,
      title: 'Networking & Infrastructure',
      description: 'Robust network architecture and infrastructure solutions ensuring secure, reliable, and scalable connectivity.',
      features: [
        'Network Design & Setup',
        'Server Configuration',
        'Security Infrastructure',
        'VPN & Remote Access'
      ],
      link: '#contact'
    },
    {
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
        <path d="M12 3C12 3 8 7 8 12C8 17 12 21 12 21" stroke="currentColor" stroke-width="2"/>
        <path d="M12 3C12 3 16 7 16 12C16 17 12 21 12 21" stroke="currentColor" stroke-width="2"/>
        <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2"/>
      </svg>`,
      title: 'Cloud & Automation',
      description: 'Cloud migration, deployment automation, and DevOps solutions to optimize your infrastructure and workflows.',
      features: [
        'Cloud Migration (AWS, Azure, GCP)',
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Container Orchestration'
      ],
      link: '#contact'
    },
    {
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/>
        <path d="M8 21H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M12 17V21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
      title: 'UI/UX Design & Branding',
      description: 'Beautiful, intuitive user interfaces and strong brand identities that engage users and reflect your values.',
      features: [
        'User Interface Design',
        'User Experience Research',
        'Brand Identity Design',
        'Design Systems'
      ],
      link: '#contact'
    },
    {
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </svg>`,
      title: 'IT Consulting & Maintenance',
      description: 'Expert guidance and ongoing support to ensure your technology infrastructure runs smoothly and efficiently.',
      features: [
        'Technology Strategy',
        'System Maintenance',
        '24/7 Technical Support',
        'Performance Optimization'
      ],
      link: '#contact'
    }
  ];
}

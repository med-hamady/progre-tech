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
      iconImg: '/icons/Software_Developement_Icon.png',
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
      iconImg: '/icons/Networking_and_Infrastructure_Icon.png',
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
      iconImg: '/icons/Cloud_and_Automation_Icon.png',
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
      iconImg: '/icons/UIUX_Design_and_Branding_Icon.png',
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
      iconImg: '/icons/IT_Consulting_and_Maintenance_Icon.png',
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

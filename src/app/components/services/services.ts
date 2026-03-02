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
      description: 'We build web apps, mobile apps, and backend systems from scratch. You tell us what your business needs — we write the code and ship it.',
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
      description: 'Office networks, server rooms, firewalls, VPNs — we design, install, and maintain the infrastructure your business runs on.',
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
      description: 'We move your systems to the cloud, set up automated deployments, and make sure everything keeps running without manual intervention.',
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
      description: 'Good software is useless if nobody can figure out how to use it. We design clean interfaces, test them with real users, and build your visual identity.',
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
      description: 'Not sure what tech stack fits your project? Already have systems that need fixing? We advise, maintain, and keep things running.',
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

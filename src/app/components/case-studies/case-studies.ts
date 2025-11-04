import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-studies.html',
  styleUrls: ['./case-studies.css']
})
export class CaseStudiesComponent {
  projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Software Development',
      description: 'A comprehensive online marketplace with secure payment integration, inventory management, and real-time analytics.',
      image: '/projects/ecommerce.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#contact'
    },
    {
      title: 'Corporate Network Infrastructure',
      category: 'Networking Solutions',
      description: 'Enterprise-grade network setup with advanced security protocols, VPN access, and 24/7 monitoring capabilities.',
      image: '/projects/network.jpg',
      technologies: ['Cisco', 'Firewall', 'VPN', 'Network Security'],
      link: '#contact'
    },
    {
      title: 'Healthcare Management System',
      category: 'Enterprise Software',
      description: 'Digital solution for patient records management, appointment scheduling, and telemedicine integration.',
      image: '/projects/healthcare.jpg',
      technologies: ['React', 'Spring Boot', 'PostgreSQL', 'AWS'],
      link: '#contact'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure mobile banking application with biometric authentication, real-time transactions, and financial insights.',
      image: '/projects/mobile-banking.jpg',
      technologies: ['Flutter', 'Firebase', 'REST API', 'Security'],
      link: '#contact'
    }
  ];
}

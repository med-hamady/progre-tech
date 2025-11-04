import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectMetric {
  value: string;
  label: string;
}

interface Project {
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  link: string;
  year: string;
  metrics: ProjectMetric[];
  testimonial?: string;
  clientName?: string;
  clientRole?: string;
}

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-studies.html',
  styleUrls: ['./case-studies.css']
})
export class CaseStudiesComponent {
  projects: Project[] = [
    {
      title: 'Sedad Bank Mobile Wallet',
      category: 'FinTech • Mobile Banking',
      year: '2024',
      description: 'First mobile wallet application developed in Mauritania, launched by the Mauritanian Investment Bank. A revolutionary digital banking solution that increased customer adoption by 10x within the first year.',
      shortDescription: 'Revolutionary mobile banking solution serving 10,000+ active users in Mauritania.',
      image: '/projects/sedad-bank.jpg',
      technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'Biometric Auth', 'Real-time Transactions'],
      metrics: [
        { value: '10,000+', label: 'Active Users' },
        { value: '10x', label: 'Growth in 1 Year' },
        { value: '99.9%', label: 'Uptime' }
      ],
      testimonial: 'Proger Technology delivered beyond our expectations. The Sedad Bank app transformed how our customers interact with banking services.',
      clientName: 'Mohamed Lemine',
      clientRole: 'CTO, Mauritanian Investment Bank',
      link: '#contact'
    },
    {
      title: 'Enterprise Network Infrastructure',
      category: 'Networking • Cybersecurity',
      year: '2023',
      description: 'Comprehensive network infrastructure for a multinational corporation with 500+ employees across 5 locations.',
      shortDescription: 'Enterprise-grade network serving 500+ employees across 5 locations.',
      image: '/projects/network-infra.jpg',
      technologies: ['Cisco', 'Fortinet', 'VPN', 'VLAN', 'Firewall', 'Network Monitoring'],
      metrics: [
        { value: '500+', label: 'Connected Users' },
        { value: '5', label: 'Office Locations' },
        { value: 'Zero', label: 'Security Breaches' }
      ],
      link: '#contact'
    },
    {
      title: 'Healthcare Management Platform',
      category: 'Healthcare • SaaS',
      year: '2023',
      description: 'Integrated healthcare management system for clinics and hospitals.',
      shortDescription: 'Healthcare platform managing 50,000+ patient records with HIPAA compliance.',
      image: '/projects/healthcare.jpg',
      technologies: ['React', 'Spring Boot', 'PostgreSQL', 'AWS', 'Telemedicine'],
      metrics: [
        { value: '50,000+', label: 'Patient Records' },
        { value: '15', label: 'Healthcare Facilities' }
      ],
      link: '#contact'
    },
    {
      title: 'E-Commerce Marketplace',
      category: 'E-Commerce • Retail',
      year: '2024',
      description: 'Multi-vendor e-commerce platform with advanced inventory management and analytics.',
      shortDescription: 'Multi-vendor marketplace processing $500K+ monthly transactions.',
      image: '/projects/ecommerce.jpg',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Analytics'],
      metrics: [
        { value: '$500K+', label: 'Monthly Revenue' },
        { value: '200+', label: 'Active Vendors' }
      ],
      link: '#contact'
    },
    {
      title: 'Smart Automation System',
      category: 'IoT • Automation',
      year: '2023',
      description: 'Industrial automation and IoT monitoring system for manufacturing facilities.',
      shortDescription: 'IoT system monitoring 200+ industrial sensors in real-time.',
      image: '/projects/automation.jpg',
      technologies: ['Python', 'IoT', 'AWS IoT', 'Real-time Monitoring'],
      metrics: [
        { value: '200+', label: 'IoT Sensors' },
        { value: '24/7', label: 'Monitoring' }
      ],
      link: '#contact'
    }
  ];
}

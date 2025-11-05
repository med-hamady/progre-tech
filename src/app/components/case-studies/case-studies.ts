import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  year: string;
  client?: string;
  status: 'completed' | 'in-progress';
  featured?: boolean;
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
      description: 'First mobile wallet application in Mauritania, developed for Mauritanian Investment Bank. Features include mobile payments, bill payments, money transfers, and e-commerce integration.',
      image: '/projects/sedad-bank.jpg',
      technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'Mobile Security', 'Payment Gateway'],
      link: '#contact',
      year: '2024',
      client: 'Mauritanian Investment Bank',
      status: 'completed',
      featured: true
    },
    {
      title: 'Enterprise Network Infrastructure',
      category: 'Networking • Cybersecurity',
      description: 'Complete network infrastructure setup for a multi-location organization with 500+ employees. Includes VPN, firewall configuration, and 24/7 monitoring.',
      image: '/projects/network-infrastructure.jpg',
      technologies: ['Cisco', 'Fortinet', 'VPN', 'VLAN', 'Network Monitoring'],
      link: '#contact',
      year: '2023',
      client: 'Enterprise Client',
      status: 'completed'
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Development • E-Commerce',
      description: 'Full-featured online marketplace with product catalog, shopping cart, payment integration, and admin dashboard for inventory management.',
      image: '/projects/ecommerce-platform.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      link: '#contact',
      year: '2024',
      status: 'completed'
    },
    {
      title: 'Healthcare Management System',
      category: 'Healthcare • SaaS',
      description: 'Comprehensive healthcare solution for patient records management, appointment scheduling, prescription tracking, and telemedicine capabilities.',
      image: '/projects/healthcare-system.jpg',
      technologies: ['React', 'Spring Boot', 'PostgreSQL', 'WebRTC', 'Cloud Storage'],
      link: '#contact',
      year: '2023',
      status: 'completed'
    },
    {
      title: 'Corporate Website Redesign',
      category: 'Web Design • Branding',
      description: 'Modern, responsive website redesign for a leading corporate client with focus on user experience and brand identity.',
      image: '/projects/corporate-website.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
      link: '#contact',
      year: '2024',
      status: 'completed'
    },
    {
      title: 'IoT Monitoring System',
      category: 'IoT • Automation',
      description: 'Real-time IoT monitoring dashboard for industrial facilities with sensor data visualization and automated alerts.',
      image: '/projects/iot-system.jpg',
      technologies: ['Python', 'IoT', 'AWS IoT', 'React', 'TimescaleDB'],
      link: '#contact',
      year: '2023',
      status: 'completed'
    }
  ];

  // Separate featured projects
  get featuredProjects() {
    return this.projects.filter(p => p.featured);
  }

  get regularProjects() {
    return this.projects.filter(p => !p.featured);
  }
}

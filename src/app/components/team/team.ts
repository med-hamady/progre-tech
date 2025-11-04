import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.html',
  styleUrls: ['./team.css']
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'Abdellahi Ahmed Ahmed Baba',
      role: 'CEO & Network Engineer',
      bio: 'Visionary leader with extensive experience in network architecture and infrastructure design. Abdellahi drives the company\'s strategic direction and ensures technical excellence across all projects.',
      image: '/team-abdellahi.jpg',
      socials: [
        { platform: 'linkedin', link: '#' },
        { platform: 'github', link: '#' }
      ]
    },
    {
      name: 'Mohamed Mohamd Oumar',
      role: 'CTO & Software Engineer',
      bio: 'Expert software architect specializing in scalable enterprise solutions. Mohamed leads our development teams and sets the technical standards for all software projects.',
      image: '/team-omar.jpg',
      socials: [
        { platform: 'linkedin', link: '#' },
        { platform: 'github', link: '#' }
      ]
    },
    {
      name: 'Fatimetou',
      role: 'CDO & Creative Director',
      bio: 'Creative visionary bringing innovative design thinking to every project. Fatimetou oversees all design initiatives and ensures exceptional user experiences across our solutions.',
      image: '/team-fatimetou.jpg',
      socials: [
        { platform: 'linkedin', link: '#' }
      ]
    },
    {
      name: 'Hamadi',
      role: 'COO & AI & Automation Engineer',
      bio: 'Operations expert specializing in AI-driven automation and process optimization. Hamadi ensures efficient project delivery and implements cutting-edge automation solutions.',
      image: '/team-hamady.jpg',
      socials: [
        { platform: 'linkedin', link: '#' },
        { platform: 'github', link: '#' }
      ]
    }
  ];
}

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
      role: 'CTO & Network Engineer',
      bio: 'Visionary leader with extensive experience in network architecture and infrastructure design. Abdellahi drives the company\'s strategic direction and ensures technical excellence across all projects.',
      image: '/team-abdellahi.jpg',
      socials: [
        { platform: 'linkedin', link: 'https://www.linkedin.com/in/abdellahiahmedahmedbaba/' },
        { platform: 'github', link: 'https://github.com/AbdellahiAhmed' }
      ]
    },
    {
      name: 'Mohamed Mohamd Oumar',
      role: 'CEO & Backend Developer',
      bio: 'Expert software architect specializing in scalable enterprise solutions. Mohamed leads our development teams and sets the technical standards for all software projects.',
      image: '/team-oumar.jpg',
      socials: [
        { platform: 'linkedin', link: 'https://www.linkedin.com/in/mouhamed-oumar/' },
        { platform: 'github', link: 'https://github.com/MouhamedOUMAR' }
      ]
    },
    {
      name: 'Fatimetou Al Alem',
      role: 'CDO & AI & Automation Engineer',
      bio: 'Operations expert specializing in AI-driven automation and process optimization. Fatimetou ensures efficient project delivery and implements cutting-edge automation solutions.',
      image: '/team-fatimetou.jpg',
      socials: [
        { platform: 'linkedin', link: '#' }
      ]
    },
    {
      name: 'Mohamed Sidi Yahya Hamady',
      role: 'COO & FullStack Developer',
      bio: 'Creative visionary bringing innovative design thinking to every project. Hamady oversees all design initiatives and ensures exceptional user experiences across our solutions.',
      image: '/team-hamady.jpg',
      socials: [
        { platform: 'linkedin', link: 'https://www.linkedin.com/in/mohamedsidiyahyahamady/' },
        { platform: 'github', link: 'https://github.com/med-hamady' }
      ]
    }
  ];
}

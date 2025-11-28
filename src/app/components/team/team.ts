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

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    // Create a professional placeholder SVG for team member
    const placeholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgba(37,99,235,0.1)'/%3E%3Cstop offset='100%25' style='stop-color:rgba(20,184,166,0.1)'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23bg)'/%3E%3Cg transform='translate(200,200)'%3E%3Ccircle cx='0' cy='-20' r='50' fill='rgba(37,99,235,0.3)'/%3E%3Cellipse cx='0' cy='80' rx='70' ry='90' fill='rgba(37,99,235,0.3)'/%3E%3Cpath d='M -30,-30 Q -35,-50 -25,-55 Q -15,-60 0,-58 Q 15,-60 25,-55 Q 35,-50 30,-30 Z' fill='rgba(20,184,166,0.4)'/%3E%3C/g%3E%3Ctext x='200' y='360' font-family='Arial,sans-serif' font-size='16' fill='rgba(148,163,184,0.8)' text-anchor='middle'%3EPhoto Coming Soon%3C/text%3E%3C/svg%3E`;
    imgElement.src = placeholder;
  }
}

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
    // Create a professional female avatar placeholder with gradient background
    const placeholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='bgGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2314B8A6'/%3E%3Cstop offset='100%25' style='stop-color:%232563EB'/%3E%3C/linearGradient%3E%3ClinearGradient id='faceGrad' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FED7AA'/%3E%3Cstop offset='100%25' style='stop-color:%23FDBA74'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23bgGrad)'/%3E%3Cg transform='translate(200,200)'%3E%3Ccircle cx='0' cy='-10' r='65' fill='url(%23faceGrad)'/%3E%3Cellipse cx='0' cy='100' rx='85' ry='100' fill='%232563EB'/%3E%3Cpath d='M -35,-25 Q -40,-45 -28,-52 Q -18,-58 0,-56 Q 18,-58 28,-52 Q 40,-45 35,-25 Z' fill='%231E40AF'/%3E%3Cellipse cx='-20' cy='-10' rx='8' ry='12' fill='%231F2937'/%3E%3Cellipse cx='20' cy='-10' rx='8' ry='12' fill='%231F2937'/%3E%3Cellipse cx='-20' cy='-8' rx='3' ry='4' fill='white' opacity='0.6'/%3E%3Cellipse cx='20' cy='-8' rx='3' ry='4' fill='white' opacity='0.6'/%3E%3Cpath d='M -15,10 Q 0,18 15,10' stroke='%23DC2626' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='-35' cy='5' r='12' fill='%23FCA5A5' opacity='0.4'/%3E%3Ccircle cx='35' cy='5' r='12' fill='%23FCA5A5' opacity='0.4'/%3E%3C/g%3E%3Ctext x='200' y='370' font-family='system-ui,sans-serif' font-size='14' font-weight='600' fill='white' text-anchor='middle' opacity='0.9'%3EFatimetou Al Alem%3C/text%3E%3C/svg%3E`;
    imgElement.src = placeholder;
  }
}

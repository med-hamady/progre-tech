import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css'
})
export class TechStackComponent {
  techCategories = [
    {
      name: 'Frontend Frameworks',
      icon: 'assets/icons/web-dev.svg',
      technologies: [
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
      ]
    },
    {
      name: 'Backend & Database',
      icon: 'assets/icons/backend.svg',
      technologies: [
        { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' }
      ]
    },
    {
      name: 'Mobile Development',
      icon: 'assets/icons/mobile.svg',
      technologies: [
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' }
      ]
    },
    {
      name: 'Network & Infrastructure',
      icon: 'assets/icons/networking.svg',
      technologies: [
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Cisco', icon: 'https://cdn.simpleicons.org/cisco/1BA0D7' },
        { name: 'MikroTik', icon: 'https://cdn.simpleicons.org/mikrotik/293239' }
      ]
    },
    {
      name: 'DevOps & Cloud',
      icon: 'assets/icons/cloud.svg',
      technologies: [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Cloudflare', icon: 'https://cdn.simpleicons.org/cloudflare/F38020' }
      ]
    },
    {
      name: 'AI & Automation',
      icon: 'assets/icons/ai.svg',
      technologies: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
      ]
    },
    {
      name: 'Design Tools',
      icon: 'assets/icons/design.svg',
      technologies: [
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
      ]
    }
  ];

  get allTechnologies() {
    return this.techCategories.flatMap(category => category.technologies);
  }
}

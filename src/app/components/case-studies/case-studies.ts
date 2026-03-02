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
  deviceType?: 'mobile' | 'web';
}

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-studies.html',
  styleUrls: ['./case-studies.css']
})
export class CaseStudiesComponent {
  currentIndex = 0;

  projects: Project[] = [
    {
      title: 'Traiteurs Application',
      category: 'Software Development • Mobile Development',
      description: 'The first app of its kind in Mauritania. Wedding organizers find and book caterers, compare menus, and track orders. Caterers manage their dishes and incoming requests. Both sides save hours of phone calls.',
      image: '/projects/Traiteurs_App.png',
      technologies: ['Flutter', 'Supabase', 'PostgreSQL', 'React.js'],
      link: '#contact',
      year: '2025',
      client: 'An Organisation',
      status: 'in-progress',
      featured: true,
      deviceType: 'mobile'
    },
    {
      title: 'FacGame',
      category: 'Software Development • Web Development',
      description: 'Medical students use FacGame to practice QCMs, follow structured lessons, and compete on leaderboards. It makes studying for exams less painful and a lot more effective.',
      image: '/projects/facgame.png',
      technologies: ['Angular', 'PostgreSQL'],
      link: '#contact',
      year: '2025',
      client: 'Client',
      status: 'completed',
      deviceType: 'web'
    },
  ];

  get currentProject() {
    return this.projects[this.currentIndex];
  }

  nextProject() {
    if (this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
    }
  }

  previousProject() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  goToProject(index: number) {
    this.currentIndex = index;
  }
}

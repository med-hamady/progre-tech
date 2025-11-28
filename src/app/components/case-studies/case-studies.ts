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
      description: 'Traiteurs is the first mobile app in mauritanie that connects wedding organizers with local caterers. Clients can browse menus, place and track orders, while caterers manage their dishes and requests — all in one simple, modern platform.',
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
      title: 'Bachalor App',
      category: 'Software Development • Mobile Development',
      description: 'Comprehensive Mobile App for university students for english learning.',
      image: '/projects/Bachalor_App.png',
      technologies: ['Flutter', 'Firebase', 'Firebase Database', 'Cloud Storage'],
      link: '#contact',
      year: '2024',
      status: 'in-progress',
      deviceType: 'mobile'
    },
    {
      title: 'FacGame',
      category: 'Software Development • Web Development',
      description: 'A gamified web app that helps medical students learn smarter through interactive QCMs, lessons, videos, and challenges — turning revision into an engaging experience.',
      image: '/projects/facgame.png',
      technologies: ['Angular', 'PostgreSQL'],
      link: '#contact',
      year: '2025',
      client: 'Client',
      status: 'completed',
      deviceType: 'web'
    },
    {
      title: 'Archify',
      category: 'Web Development • E-Learning Platform',
      description: 'Archify is a learning platform that provides access to past exams with detailed video explanations and solution documents, helping students understand, practice, and excel through real exam materials.',
      image: '/projects/archify.png',
      technologies: ['Angular', 'Node.js', 'PostgreSQL'],
      link: '#contact',
      year: '2024',
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

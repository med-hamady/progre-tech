import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      name: 'Ahmed Ould Sidi',
      role: 'CEO',
      company: 'Mauritania Logistics',
      image: 'assets/avatars/avatar-1.jpg',
      text: 'Proger Technology transformed our logistics operations with their custom software. The efficiency gains were immediate, and their team was incredibly professional throughout the process.'
    },
    {
      name: 'Fatimetou Mint Ali',
      role: 'Director',
      company: 'EduTech Solutions',
      image: 'assets/avatars/avatar-2.jpg',
      text: 'The e-learning platform they built for us is world-class. It handles thousands of students seamlessly. Their expertise in cloud infrastructure is unmatched in the region.'
    },
    {
      name: 'Mamadou Diop',
      role: 'Founder',
      company: 'Sahel Innovations',
      image: 'assets/avatars/avatar-3.jpg',
      text: 'Working with Proger was a game-changer. They didn\'t just build an app; they helped us refine our business model and delivered a product that our users love.'
    }
  ];
}

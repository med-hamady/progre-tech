import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css'
})
export class TechStackComponent {
  technologies = [
    'Angular', 'React', 'TypeScript', 'Node.js',
    'Express', 'Tailwind CSS', 'PostgreSQL', 'MongoDB',
    'Docker', 'AWS', 'Figma', 'Git'
  ];
}

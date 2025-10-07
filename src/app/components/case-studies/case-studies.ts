import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [],
  templateUrl: './case-studies.html',
  styleUrl: './case-studies.css'
})
export class CaseStudiesComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      // Get all tab buttons and project cards from this component
      const tabButtons = this.elementRef.nativeElement.querySelectorAll('.tab-btn');
      const projectCards = this.elementRef.nativeElement.querySelectorAll('.project-card');

      console.log('Tab buttons found:', tabButtons.length);
      console.log('Project cards found:', projectCards.length);

      tabButtons.forEach((button: HTMLElement) => {
        button.addEventListener('click', () => {
          const projectId = button.getAttribute('data-project');
          console.log('Clicked project:', projectId);

          // Remove active class from all buttons and cards
          tabButtons.forEach((btn: HTMLElement) => btn.classList.remove('active'));
          projectCards.forEach((card: HTMLElement) => card.classList.remove('active'));

          // Add active class to clicked button
          button.classList.add('active');

          // Show corresponding project card
          const targetCard = this.elementRef.nativeElement.querySelector(`.project-card[data-project="${projectId}"]`);
          if (targetCard) {
            targetCard.classList.add('active');
            console.log('Showing project:', projectId);
          }
        });
      });
    }, 100);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent {
  // Typing Animation
  typingText = '';
  isPaused = false; // Controls cursor blinking
  private words = ['Networks', 'Software', 'Solutions', 'Infrastructure'];
  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeSpeed = 80;

  // 3D Tilt
  tiltTransform = '';

  const y = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
  const rotateY = ((x - centerX) / centerX) * 10;

    this.tiltTransform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

onMouseLeave() {
  this.tiltTransform = 'perspective(1000px) rotateX(0) rotateY(0)';
}

requestDemo() {
  alert('Merci pour votre intérêt ! Nous vous contacterons bientôt.');
}
}
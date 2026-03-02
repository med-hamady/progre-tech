import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  values = [
    {
      iconImg: '/icons/Innovation_Icon.png',
      title: 'Innovation',
      description: 'We stay up to date with the tools that matter and aren\'t afraid to try new approaches when they make sense for the project.'
    },
    {
      iconImg: '/icons/Reliability_Icon.png',
      title: 'Reliability',
      description: 'When we say we\'ll deliver by Friday, we deliver by Friday. No excuses, no last-minute surprises.'
    },
    {
      iconImg: '/icons/Excellence_Icon.png',
      title: 'Excellence',
      description: 'We write clean code, test it properly, and don\'t cut corners just to ship faster. Quality is not optional.'
    },
    {
      iconImg: '/icons/Security_Icon.png',
      title: 'Security',
      description: 'Your data is your business. We handle it with care — proper encryption, access controls, and security audits on every project.'
    },
    {
      iconImg: '/icons/Collaboration_Icon.png',
      title: 'Collaboration',
      description: 'We don\'t disappear into a black box. You\'re part of the process from day one, with regular updates and honest feedback.'
    },
    {
      iconImg: '/icons/Integrity_Icon.png',
      title: 'Integrity',
      description: 'If something isn\'t working or a deadline is at risk, we tell you straight. No sugarcoating, no hidden fees.'
    }
  ];
}

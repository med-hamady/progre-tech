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
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the curve.'
    },
    {
      iconImg: '/icons/Reliability_Icon.png',
      title: 'Reliability',
      description: 'We build lasting relationships through consistent delivery, transparent communication, and unwavering commitment to our promises.'
    },
    {
      iconImg: '/icons/Excellence_Icon.png',
      title: 'Excellence',
      description: 'We pursue the highest standards in everything we do, from code quality to customer service, ensuring exceptional results every time.'
    },
    {
      iconImg: '/icons/Security_Icon.png',
      title: 'Security',
      description: 'We prioritize the security and privacy of our clients\' data, implementing robust measures to protect against evolving threats.'
    },
    {
      iconImg: '/icons/Collaboration_Icon.png',
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, combining our expertise with their vision to achieve remarkable outcomes together.'
    },
    {
      iconImg: '/icons/Integrity_Icon.png',
      title: 'Integrity',
      description: 'We conduct business with honesty and transparency, building trust through ethical practices and genuine care for our clients\' success.'
    }
  ];
}

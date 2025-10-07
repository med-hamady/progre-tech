import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './platform.html',
  styleUrls: ['./platform.css']
})
export class PlatformComponent {
  features = [
    { name: 'AI Integration', angle: 30 },
    { name: 'Security', angle: 90 },
    { name: 'Data Analytics', angle: 150 },
    { name: 'Mobile Apps', angle: 210 },
    { name: 'Web Development', angle: 270 },
    { name: 'Code-as-code', angle: 330 }
  ];
}
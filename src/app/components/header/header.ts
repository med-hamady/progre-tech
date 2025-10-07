import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  menuItems = [
    { label: 'Platform', link: '#platform' },
    { label: 'Solutions', link: '#solutions' },
    { label: 'Case Studies', link: '#case-studies' },
    { label: 'Integrations', link: '#integrations' }
  ];
}
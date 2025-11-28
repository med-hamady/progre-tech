import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-terms',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './terms.html',
    styleUrl: './terms.css'
})
export class TermsComponent {
    lastUpdated = 'November 28, 2025';
}

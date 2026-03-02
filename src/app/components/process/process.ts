import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProcessStep {
    title: string;
    description: string;
    icon: string;
}

@Component({
    selector: 'app-process',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './process.html',
    styleUrl: './process.css'
})
export class ProcessComponent {
    steps: ProcessStep[] = [
        {
            title: 'Discovery',
            description: 'We sit down with you, learn how your business works, and figure out what the real problem is before writing a single line of code.',
            icon: 'icons/discovery.png'
        },
        {
            title: 'Strategy & Design',
            description: 'We map out the technical approach, design the screens and flows, and share it all with you before building anything.',
            icon: 'icons/design.png'
        },
        {
            title: 'Development',
            description: 'We build it. You get regular updates and working demos along the way — no disappearing for months then dropping a finished product.',
            icon: 'icons/code.png'
        },
        {
            title: 'Launch & Scale',
            description: 'We deploy to production, make sure everything works, and stick around to fix bugs and add features as your needs change.',
            icon: 'icons/rocket.png'
        }
    ];
}

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
            description: 'We dive deep into your business goals, challenges, and requirements to understand exactly what you need.',
            icon: 'icons/discovery.png'
        },
        {
            title: 'Strategy & Design',
            description: 'We create a comprehensive roadmap and design intuitive, user-centric interfaces that align with your brand.',
            icon: 'icons/design.png'
        },
        {
            title: 'Development',
            description: 'Our expert developers build your solution using cutting-edge technologies, ensuring scalability and performance.',
            icon: 'icons/code.png'
        },
        {
            title: 'Launch & Scale',
            description: 'We deploy your solution, provide training, and offer ongoing support to help your business grow.',
            icon: 'icons/rocket.png'
        }
    ];
}

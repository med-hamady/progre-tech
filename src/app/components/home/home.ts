import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { TechStackComponent } from '../tech-stack/tech-stack';
import { ServicesComponent } from '../services/services';
import { ProcessComponent } from '../process/process';
import { CaseStudiesComponent } from '../case-studies/case-studies';
import { Testimonials } from '../testimonials/testimonials';
import { AboutComponent } from '../about/about';
import { TeamComponent } from '../team/team';
import { ContactComponent } from '../contact/contact';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        HeroComponent,
        TechStackComponent,
        ServicesComponent,
        ProcessComponent,
        CaseStudiesComponent,
        Testimonials,
        AboutComponent,
        TeamComponent,
        ContactComponent
    ],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class HomeComponent { }

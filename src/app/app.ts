import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { PlatformComponent } from './components/platform/platform';
import { ServicesComponent } from './components/services/services';
import { AboutComponent } from './components/about/about';
import { TechStackComponent } from './components/tech-stack/tech-stack';
import { CaseStudiesComponent } from './components/case-studies/case-studies';
import { TeamComponent } from './components/team/team';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    PlatformComponent,
    ServicesComponent,
    AboutComponent,
    TechStackComponent,
    CaseStudiesComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'progre-technology';
}
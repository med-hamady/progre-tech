import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { TechStackComponent } from './components/tech-stack/tech-stack';
import { ServicesComponent } from './components/services/services';
import { AboutComponent } from './components/about/about';
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
    TechStackComponent,
    ServicesComponent,
    CaseStudiesComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'progre-technology';
  showScrollTop = false;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.showScrollTop = window.scrollY > 300;
      });
    }
  }

  scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
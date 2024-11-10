import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { MemberOpinionsComponent } from './member-opinions/member-opinions.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, ContactComponent, FooterComponent, LandingPageComponent, MemberOpinionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor() {
    this.showImprint();
  }

  showImprint() {
    document.getElementById('imprint')?.addEventListener('click', () => {
      document.getElementById('imprint-component')?.classList.remove('d-none');
    });
  }

  hideImprint() {
    document.getElementById('imprint')?.classList.remove('d-none');
  }
}

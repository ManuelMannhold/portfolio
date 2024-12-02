import { Component, inject, OnInit} from '@angular/core';
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
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule, HeaderComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, ContactComponent, FooterComponent, LandingPageComponent, MemberOpinionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  currentLanguage:string = 'en';

  languages = ["en", "de"];
  private translateService = inject(TranslateService);

  ngOnInit(): void {
    const defaultLanguage = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);
  }

  changeLanguage(language:string) {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translateService.use(this.currentLanguage);
    // localStorage.setItem('language', this.currentLanguage);
  }
  title = 'portfolio';
  
  /**
 * Attaches an event listener to the "imprint" element to display the imprint component.
 * 
 * The function performs the following:
 * - Finds the element with the ID "imprint" and adds a click event listener to it.
 * - When the "imprint" element is clicked, the "d-none" class is removed from the 
 *   element with the ID "imprint-component", making it visible.
 */

  showImprint() {
    document.getElementById('imprint')?.addEventListener('click', () => {
      document.getElementById('imprint-component')?.classList.remove('d-none');
    });
  }

  /**
 * Makes the "imprint" element visible by removing the "d-none" class.
 * 
 * The function performs the following:
 * - Finds the element with the ID "imprint".
 * - Removes the "d-none" class from it, making the element visible.
 */

  hideImprint() {
    document.getElementById('imprint')?.classList.remove('d-none');
  }
}

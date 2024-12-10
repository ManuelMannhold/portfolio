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
  }
  title = 'portfolio';
}

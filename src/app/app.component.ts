import { Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';
import { PortfolioComponent } from './main-content/portfolio/portfolio.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingPageComponent } from "./main-content/landing-page/landing-page.component";
import { MemberOpinionsComponent } from './main-content/member-opinions/member-opinions.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MainContentComponent } from "./main-content/main-content.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, RouterOutlet, TranslateModule, HeaderComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, ContactComponent, FooterComponent, LandingPageComponent, MemberOpinionsComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  currentLanguage:string = 'de';

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

import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLanguage: string = 'en';
  private translateService = inject(TranslateService);

  english: boolean = true;

  constructor() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      this.currentLanguage = savedLanguage;
      this.english = savedLanguage === 'en';
      this.translateService.use(this.currentLanguage);
    }
  }

  /**
 * Lifecycle hook that is called after Angular has initialized the component.
 * Scrolls the window to the top of the page (coordinates 0, 0).
 */
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  /**
 * Sets the application language to the specified language code.
 * Updates the translation service and stores the language preference in localStorage.
 *
 * @param {string} languageCode - The language code to set (e.g., 'de' for German, 'en' for English).
 */
  changeLanguage(languageCode: string) {
    this.currentLanguage = languageCode;
    this.translateService.use(this.currentLanguage);
    localStorage.setItem('language', this.currentLanguage);
  }

  /**
 * Sets the application language to English.
 * Updates the translation service to use English ('en') and stores the preference in localStorage.
 */
  openResponsiveMenu() {
    let openMenu: HTMLElement | null = document.getElementById('responsive-menu');
    if (openMenu)
      openMenu.style.transform = 'translate(0)';
  }

  /**
 * Closes the responsive menu by modifying its transform style.
 * Finds the element with the ID 'responsive-menu' and sets its transform property to move it out of view.
 */
  closeResponsiveMenu() {
    let responsMenu = document.getElementById('responsive-menu');
    if (responsMenu)
      responsMenu.style.transform = 'translate(10000px)';
  }
}

import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, NgClass, RouterLink],
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
 * Changes the current application language.
 * Toggles the language setting and updates the translation service to use the newly selected language.
 */
  changeLanguage() {
    this.toggleLanguage();
    this.translateService.use(this.currentLanguage);
  }

  /**
 * Toggles the current language setting between English and German.
 * Updates the `currentLanguage` property and stores the selected language in local storage.
 */
  toggleLanguage() {
    if (this.english) {
      this.english = false;
      this.currentLanguage = 'de';
    } else {
      this.english = true;
      this.currentLanguage = 'en';
    }
    localStorage.setItem('language', this.currentLanguage);
  }

  /**
 * Opens the responsive menu by modifying its transform style.
 * Finds the element with the ID 'responsive-menu' and sets its transform property to move it into view.
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

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

  changeLanguage() {
    this.toggleLanguage();
    this.translateService.use(this.currentLanguage);
  }

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
 * Opens the responsive menu by changing its transform style.
 * 
 * The function performs the following:
 * - Retrieves the element with the ID "responsive-menu".
 * - If the element is found, it sets the `transform` CSS property to `translate(0)`, 
 *   making the menu visible by moving it into view.
 * 
 * @remarks
 * This method assumes that the "responsive-menu" element is initially hidden or positioned off-screen 
 * using CSS transforms, and this function makes it visible by adjusting its transform property.
 */

  openResponsiveMenu() {
    let openMenu: HTMLElement | null = document.getElementById('responsive-menu');
    if (openMenu)
      openMenu.style.transform = 'translate(0)';
  }

  /**
 * Closes the responsive menu by changing its transform style to move it off-screen.
 * 
 * The function performs the following:
 * - Retrieves the element with the ID "responsive-menu".
 * - If the element is found, it sets the `transform` CSS property to `translate(10000px)`, 
 *   effectively moving the menu out of view.
 * 
 * @remarks
 * This method assumes that the "responsive-menu" element is positioned using CSS transforms 
 * and this function hides it by moving it far off-screen.
 */

  closeResponsiveMenu() {
    let responsMenu = document.getElementById('responsive-menu');
    if (responsMenu)
      responsMenu.style.transform = 'translate(10000px)';
  }
}

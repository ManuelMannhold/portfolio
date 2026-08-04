import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { PrivacyPolicyComponent } from '../../privacy-policy/privacy-policy.component';
import { ImprintComponent } from '../../imprint/imprint.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule, ImprintComponent, PrivacyPolicyComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './media.scss'],
})
export class HeaderComponent {
  currentLanguage: string = 'en';
  private translateService = inject(TranslateService);
  english: boolean = true;
  showGoBack = false;
  isMenuOpen: boolean = false;
  activeModal: 'imprint' | 'privacy' | null = null;

  toggleResponsiveMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    let openMenu: HTMLElement | null = document.getElementById('responsive-menu');
    if (openMenu) {
      if (this.isMenuOpen) {
        openMenu.style.transform = 'translate(0)';
      } else {
        openMenu.style.transform = 'translate(10000px)';
      }
    }
  }

  closeResponsiveMenu(): void {
    this.isMenuOpen = false;
    let responsMenu = document.getElementById('responsive-menu');
    if (responsMenu) {
      responsMenu.style.transform = 'translate(10000px)';
    }
  }

  constructor(private router: Router, private renderer: Renderer2) {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      this.currentLanguage = savedLanguage;
      this.english = savedLanguage === 'en';
      this.translateService.use(this.currentLanguage);
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.showGoBack = window.scrollY > 200;
  }

  toTop(): void {
    this.router.navigateByUrl('/').then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /**
   * Lifecycle hook that is called after Angular has initialized the component.
   * Scrolls the window to the top of the page (coordinates 0, 0).
   */
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.setActiveColorForLanguage();
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
    this.setActiveColorForLanguage();
  }

  /**
  * Opens the specified modal and disables background scrolling.
  * @param type - The type of modal to display ('imprint' or 'privacy').
  */
  openModal(type: 'imprint' | 'privacy') {
    this.activeModal = type;
    this.renderer.addClass(document.body, 'no-scroll');
    this.closeResponsiveMenu();
  }


  /**
   * Closes the active modal and re-enables background scrolling.
   */
  closeModal() {
    this.activeModal = null;
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  /**
   * Sets the active CSS class for the currently selected language.
   * Adds the 'active' class to the selected language button and removes it from the other.
   */
  setActiveColorForLanguage() {
    if (this.currentLanguage === 'de') {
      document.getElementById('german')?.classList.add('active');
      document.getElementById('english')?.classList.remove('active');
    } else {
      document.getElementById('english')?.classList.add('active');
      document.getElementById('german')?.classList.remove('active');
    }
  }

  /**
   * Sets the application language to English.
   * Updates the translation service to use English ('en') and stores the preference in localStorage.
   */
  openResponsiveMenu() {
    let openMenu: HTMLElement | null =
      document.getElementById('responsive-menu');
    if (openMenu) openMenu.style.transform = 'translate(0)';
  }
}

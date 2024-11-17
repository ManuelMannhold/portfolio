import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor() {
    this.closeResponsiveMenu();
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
    let openMenu:HTMLElement | null = document.getElementById('responsive-menu');
    if(openMenu) 
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
    if(responsMenu) 
    responsMenu.style.transform = 'translate(10000px)';
  }

}

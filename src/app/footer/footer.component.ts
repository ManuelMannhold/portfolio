import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor() {
    
  }

  /**
 * Displays the imprint container when triggered by an event.
 * 
 * The function performs the following:
 * - Prevents the default action of the provided event.
 * - Retrieves the element with the ID "imprint-container".
 * - If the element is found, it removes the "d-none" class to make the imprint container visible.
 * 
 * @param {Event} event - The event that triggers the function, typically a click event.
 * 
 * @remarks
 * This method assumes that the element with the ID "imprint-container" exists and is initially hidden with the "d-none" class.
 */

  showImprint(event: Event) {
    event.preventDefault();
    let imprintElement = document.getElementById('imprint-container');
    if (imprintElement) {
      imprintElement.classList.remove('d-none');
    }
  }

  /**
 * Hides the imprint container by adding the "d-none" class.
 * 
 * The function performs the following:
 * - Retrieves the element with the ID "imprint-container".
 * - If the element is found, it adds the "d-none" class to hide the imprint container.
 * 
 * @remarks
 * This method assumes that the element with the ID "imprint-container" exists and is initially visible before this function is called.
 */

  hideImprint() {
    let imprintContainer = document.getElementById('imprint-container');
    if (imprintContainer) {
      imprintContainer.classList.add('d-none');
    }
  }
}
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
  showImprint(event: Event) {
    event.preventDefault();
    let imprintElement = document.getElementById('imprint-container');
    if (imprintElement) {
      imprintElement.classList.remove('d-none');
    }
  }

  hideImprint() {
    let imprintContainer = document.getElementById('imprint-container');
    if (imprintContainer) {
      imprintContainer.classList.add('d-none');
    }
  }
}
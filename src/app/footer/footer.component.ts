import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  showImprint() {

    const imprintElement = document.getElementById('imprint');
    if (imprintElement) {
      imprintElement.classList.remove('d-none');
    }
  }

  hideImprint() {
    const imprintContainer = document.getElementById('imprint-container');
    if (imprintContainer) {
      imprintContainer.classList.add('d-none');
    }
  }
}
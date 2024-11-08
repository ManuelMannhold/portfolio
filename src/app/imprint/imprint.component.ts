import { Component } from '@angular/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor() {
    this.hideImprint();
  }

  hideImprint() {
    document.getElementById('imprint-container')?.classList.add('d-none');
  }
}

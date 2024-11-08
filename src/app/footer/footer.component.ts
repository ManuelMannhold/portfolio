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
    this.showImprint();
  }

  showImprint() {
    document.getElementById('imprint')?.classList.remove('d-none');
  }
}

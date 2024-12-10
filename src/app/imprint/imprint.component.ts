import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(private router: Router) {}

  closeOverlay() {
    this.router.navigate([{ outlets: { overlay: ['imprint'] } }]);

  }
}

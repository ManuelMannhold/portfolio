import { Component, inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor() { }

  private translateService = inject(TranslateService);
}
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  template: `
  <button (click)="navigate()">Navigiere zur Zielroute</button> 
  `
})
export class FooterComponent {
  router: any;

  constructor() { }
  private translateService = inject(TranslateService);
}
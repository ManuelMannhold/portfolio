import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})



// changeLanguage(language: string) {
//   if (""]) {
//     Object.keys(translate[language]).forEach(key => {
//       const element = document.getElementById(key);
//       if (element) {
//         element.textContent = translate[language][key];
//       }
//     });
//   }
// }

export class LandingPageComponent {
  private translateService = inject(TranslateService);
}


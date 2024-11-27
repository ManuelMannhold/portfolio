import { Component } from '@angular/core';

const translate = {
  de: {
    "Iam": "Ich bin",
  },
  en: {
    "Iam": "I am"
  }
};

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
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

}


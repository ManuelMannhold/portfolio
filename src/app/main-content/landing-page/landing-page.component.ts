import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', './media.scss']
})

export class LandingPageComponent {
  emailstring = 'mailto:contact@manuel-mannhold.de';

  private translateService = inject(TranslateService);
}


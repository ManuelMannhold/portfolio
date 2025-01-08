import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(private router: Router) {}
   private translateService = inject(TranslateService);

   /**
 * Angular lifecycle hook that is called after the component has been initialized.
 * Scrolls the window to the top of the page (coordinates 0, 0) to ensure the user sees the top of the component.
 */
   ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  /**
 * Navigates to the root URL of the application.
 * 
 * This method uses the Angular router to navigate to the homepage or default route, effectively closing or hiding 
 * the current view (such as the Impressum page) and redirecting the user.
 */
  closeImpressum() {
    this.router.navigate(['']); 
  }
}

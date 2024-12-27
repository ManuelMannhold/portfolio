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

   ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  closeImpressum() {
    this.router.navigate(['']); 
  }
}

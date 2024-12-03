import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-member-opinions',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './member-opinions.component.html',
  styleUrl: './member-opinions.component.scss'
})
export class MemberOpinionsComponent {

  private translateService = inject(TranslateService);

  currentIndex: number = 0;
  totalMembers: number = 3;
  intervalId: any;

  testimonials: { author: string; text: string }[] = [];

  constructor(private translate: TranslateService) {
    this.loadTranslations();
  }

  private loadTranslations() {
    this.translate.get('testimonials').subscribe((translatedTestimonials: any) => {
      this.testimonials = translatedTestimonials;
    });
  }

  /**
 * Advances to the next item in the testimonials array.
 * 
 * The function updates the `currentIndex` property to point to the next item in the `testimonials` array. 
 * It ensures the index wraps around to the start when it reaches the end of the array by using the modulo operator.
 * 
 * @remarks
 * This method assumes that the `testimonials` array is not empty. If the array is empty, 
 * the behavior may need additional handling to avoid potential issues.
 */

  goToNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  /**
 * Moves to the previous item in the testimonials array.
 * 
 * The function updates the `currentIndex` property to point to the previous item in the `testimonials` array. 
 * It ensures the index wraps around to the last item when it reaches the start of the array by using the modulo operator.
 * 
 * @remarks
 * This method assumes that the `testimonials` array is not empty. If the array is empty, 
 * additional handling may be required to prevent unintended behavior.
 */

  goToPrevious(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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

  /**
 * Loads translations for the testimonials section.
 * Subscribes to the translation service to retrieve the translated content for 'testimonials' 
 * and updates the `testimonials` property with the retrieved data.
 * 
 */
  private loadTranslations() {
    this.translate.get('testimonials').subscribe((translatedTestimonials: any) => {
      this.testimonials = translatedTestimonials;
    });
  }

  /**
 * Advances to the next testimonial in the list.
 * Increments the `currentIndex` by 1 and ensures it wraps around to the beginning 
 * when reaching the end of the `testimonials` array.
 */
  goToNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  /**
  * Moves to the previous testimonial in the list.
  * Decrements the `currentIndex` by 1 and ensures it wraps around to the end 
  * of the `testimonials` array if the beginning is surpassed.
  */
  goToPrevious(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

}

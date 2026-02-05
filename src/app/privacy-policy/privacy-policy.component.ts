import { Component, EventEmitter, inject, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss', './media.scss']
})
export class PrivacyPolicyComponent {
  private translateService = inject(TranslateService);
   @Output() closeEvent = new EventEmitter<void>();

  /**
  * Lifecycle hook that is called after Angular has initialized the component.
  * Scrolls the window to the top of the page (coordinates 0, 0).
  */
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  /**
 * Emits the close event to notify the parent component.
 */
  close() {
    this.closeEvent.emit();
  }
}

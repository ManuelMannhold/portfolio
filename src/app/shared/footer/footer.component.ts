import { Component, inject, Renderer2 } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ImprintComponent } from '../../imprint/imprint.component';
import { PrivacyPolicyComponent } from '../../privacy-policy/privacy-policy.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, ImprintComponent, PrivacyPolicyComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './media.scss'],
  template: `
  <button (click)="navigate()">Navigiere zur Zielroute</button> 
  `
})
export class FooterComponent {

  private translateService = inject(TranslateService);
  private _showImprint = false;
  router: any;
  activeModal: 'imprint' | 'privacy' | null = null;

  constructor(private renderer: Renderer2) { }

  /**
   * Opens the specified modal and disables background scrolling.
   * @param type - The type of modal to display ('imprint' or 'privacy').
   */
  openModal(type: 'imprint' | 'privacy') {
    this.activeModal = type;
    this.renderer.addClass(document.body, 'no-scroll');
  }

  /**
   * Closes the active modal and re-enables background scrolling.
   */
  closeModal() {
    this.activeModal = null;
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  /** @returns The current visibility state of the imprint modal. */
  get showImprint() {
    return this._showImprint;
  }

  /**
   * Sets the imprint modal visibility and toggles the background scroll lock.
   * @param value - Boolean to show or hide the modal.
   */
  set showImprint(value: boolean) {
    this._showImprint = value;
    if (value) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  /**
   * Toggles the imprint modal state.
   * @param state - Target visibility state.
   */
  toggleImprint(state: boolean) {
    this.showImprint = state;
  }
}
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateService,TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  private translateService = inject(TranslateService);
  http = inject(HttpClient);
  inputName!: HTMLInputElement;

  constructor() {
    this.displayErrorMessageForInput();
    this.contactMe();
  }

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = false;

  post = {
    endPoint: 'https://manuel-mannhold.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
 * Handles the submission of a form and processes data accordingly.
 * 
 * @param {NgForm} ngForm - The Angular form object containing form controls, values, and state.
 * 
 * The function performs the following:
 * - If the form is submitted, valid, and `mailTest` is false:
 *   - Sends a POST request to the specified endpoint with the data from `contactData`.
 *   - Resets the form upon successful response or logs an error if the request fails.
 * - If the form is submitted, valid, and `mailTest` is true:
 *   - Resets the form without sending the POST request.
 */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  showCheckbox!: boolean;
  sendMail: boolean = false;

  /**
 * Adds a click event listener to the "contact-me-focus" element.
 * 
 * When the "contact-me-focus" element is clicked, the focus is set to the 
 * "input-name" element if it exists in the DOM.
 */

  contactMe() {
    document.getElementById('contact-me-focus')?.addEventListener('click', () => {
      document.getElementById('input-name')?.focus();
    })
  }

  /**
 * Displays or hides an error message for input fields based on their content.
 * 
 * The function checks if the "input-name", "input-mail", and "input-message" 
 * elements are present and verifies their values:
 * - If any of the input fields are empty, the "input-span" element's 
 *   class "d-none" is removed, making the error message visible.
 * - If all input fields have values, the "d-none" class is added to 
 *   "input-span", hiding the error message.
 */

  displayErrorMessageForInput() {
    let inputName = document.getElementById('input-name') as HTMLInputElement;
    let inputMail = document.getElementById('input-mail') as HTMLInputElement;
    let inputMessage = document.getElementById('input-message') as HTMLTextAreaElement;

    if (inputName && inputMail && inputMessage) {
      if (inputName.value === '' || inputMail.value === '' || inputMessage.value === '') {
        document.getElementById('input-span')?.classList.remove('d-none');
      } else {
        document.getElementById('input-span')?.classList.add('d-none');
      }
    }
  }

  /**
 * Toggles the state of a checkbox and updates the send button and error message visibility accordingly.
 * 
 * The function performs the following:
 * - Toggles the `showCheckbox` property.
 * - Retrieves the "contact-message-send-button", "input-name", "input-mail", "input-message",
 *   and "error-message-input-fields" elements.
 * - If `showCheckbox` is true:
 *   - Calls the `ifElseSendButtonAddOrRemoveClass` method to update the send button's classes and 
 *     handle the visibility of the error message based on the input fields.
 * - If `showCheckbox` is false:
 *   - Adds the "button-disabled" class to the send button to disable it.
 *
 * @remarks
 * This method assumes that the `ifElseSendButtonAddOrRemoveClass` method exists and handles 
 * the logic for enabling/disabling the send button and managing error messages.
 */

  toggleImage() {
    let sendButton: HTMLElement | null = document.getElementById('contact-message-send-button');
    let inputName = document.getElementById('input-name') as HTMLInputElement;
    let inputMail = document.getElementById('input-mail') as HTMLInputElement;
    let inputMessage = document.getElementById('input-message') as HTMLTextAreaElement;
    let errorMessage = document.getElementById('error-message-input-fields') as HTMLDivElement;

    this.showCheckbox = !this.showCheckbox;

    if (sendButton) {
      if (this.showCheckbox) {
        this.ifElseSendButtonAddOrRemoveClass(sendButton, inputName, inputMail, inputMessage, errorMessage);
      }
      else {
        sendButton.classList.add('button-disabled');
      }
    }
  }

  /**
 * Enables or disables the send button based on the values of input fields.
 * 
 * The function performs the following:
 * - Checks if the "input-name", "input-mail", and "input-message" fields all have non-empty values.
 * - If all input fields have values, it:
 *   - Removes the "button-disabled" class from the send button, enabling it.
 *   - Sets the `sendMail` property to `true`.
 * - If any input field is empty, it:
 *   - Adds the "button-disabled" class to the send button, disabling it.
 * 
 * @param {HTMLElement} sendButton - The button element that will be enabled or disabled.
 * @param {HTMLInputElement} inputName - The input element for the user's name.
 * @param {HTMLInputElement} inputMail - The input element for the user's email.
 * @param {HTMLTextAreaElement} inputMessage - The text area element for the user's message.
 * @param {HTMLDivElement} errorMessage - The element that displays an error message (if applicable).
 */

  ifElseSendButtonAddOrRemoveClass(sendButton: HTMLElement, inputName: HTMLInputElement, inputMail: HTMLInputElement, inputMessage: HTMLTextAreaElement, errorMessage: HTMLDivElement) {
    if (inputName.value !== '' && inputMail.value !== '' && inputMessage.value !== '') {
      sendButton.classList.remove('button-disabled');
      this.sendMail = true;

    }
    else {
      sendButton.classList.add('button-disabled');

    }
  }

  /**
 * Displays a temporary overlay message to indicate that the email has been sent.
 * 
 * The function performs the following:
 * - Checks if the `sendMail` property is `true`:
 *   - If true, it shows the "email-alert" element by removing the "d-none" class and adding the "no-scroll" class.
 *   - After 2 seconds, the overlay is hidden again by adding the "d-none" class and removing the "no-scroll" class.
 *   - Disables the send button by adding the "button-disabled" class.
 *   - Calls `toggleImage` to update the UI state (e.g., toggling checkbox or button visibility).
 *   - Sets the `sendMail` property back to `false` to indicate that the sending process is complete.
 * 
 * @remarks
 * This method assumes that there is an element with the ID "email-alert" to display the overlay message.
 */

  showOverlayMessageSend() {
    const emailAlert = document.getElementById('email-alert');

    this.sendMail == true;
    if (this.sendMail == true) {
      emailAlert?.classList.remove('d-none');
      emailAlert?.classList.add('no-scroll');
      setTimeout(() => {
        emailAlert?.classList.add('d-none');
        emailAlert?.classList.remove('no-scroll');
      }, 2000);
      this.sendMail = false;
      document.getElementById('contact-message-send-button')?.classList.add('button-disabled');
      this.toggleImage();
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule, RouterLink],
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
    this.toggleImage();
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

  toggleImage() {
    let sendButton: HTMLElement | null = document.getElementById('contact-message-send-button');
    let inputName = document.getElementById('input-name') as HTMLInputElement;
    let inputMail = document.getElementById('input-mail') as HTMLInputElement;
    let inputMessage = document.getElementById('input-message') as HTMLTextAreaElement;
    let errorMessage = document.getElementById('input-span') as HTMLDivElement;
  
    this.showCheckbox = !this.showCheckbox;
  
    if (sendButton) {
      const error = this.ifElseSendButtonAddOrRemoveClass(inputName, inputMail, inputMessage, errorMessage);
      
      if (this.showCheckbox && !error) {
        sendButton.classList.remove('button-disabled');
        this.sendMail = true;
      } else {
        sendButton.classList.add('button-disabled');
      }
    }
  }
  
  ifElseSendButtonAddOrRemoveClass(
    inputName: HTMLInputElement,
    inputMail: HTMLInputElement,
    inputMessage: HTMLTextAreaElement,
    errorMessage: HTMLDivElement
  ): boolean {
    if (
      inputName.value !== '' &&
      inputMail.value !== '' &&
      inputMessage.value !== '' &&
      (!errorMessage || errorMessage.innerText.trim() === '')
    ) {
      return false;
    } else {
      return true;
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

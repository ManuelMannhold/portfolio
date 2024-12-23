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

  showCheckbox: boolean = false;
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

  /** Initializes the component and adds event listeners to inputs. */
  ngOnInit() {
    this.addInputEventListeners();
  }

  /**
 * Toggles the visibility of the checkbox and updates the send button's state
 * based on input validation.
 */
  toggleImage() {
    this.showCheckbox = !this.showCheckbox;

    const sendButton = document.getElementById('contact-message-send-button') as HTMLElement | null;
    const inputName = document.getElementById('input-name') as HTMLInputElement;
    const inputMail = document.getElementById('input-mail') as HTMLInputElement;
    const inputMessage = document.getElementById('input-message') as HTMLTextAreaElement;
    const errorMessage = document.getElementById('input-span') as HTMLDivElement;

    if (sendButton && inputName && inputMail && inputMessage) {
      const error = this.ifElseSendButtonAddOrRemoveClass(inputName, inputMail, inputMessage, errorMessage);
      this.checkInput(sendButton, error);
    }
  }

  /**
 * Adds event listeners to input fields for real-time validation and updates 
 * the send button's state accordingly.
 */
  addInputEventListeners() {
    const inputName = document.getElementById('input-name') as HTMLInputElement;
    const inputMail = document.getElementById('input-mail') as HTMLInputElement;
    const inputMessage = document.getElementById('input-message') as HTMLTextAreaElement;
    const sendButton = document.getElementById('contact-message-send-button') as HTMLElement;
    const errorMessage = document.getElementById('input-span') as HTMLDivElement;

    this.showCheckbox = !this.showCheckbox;

    if (inputName && inputMail && inputMessage && sendButton) {
      const handleInputChange = () => {
        const error = this.ifElseSendButtonAddOrRemoveClass(inputName, inputMail, inputMessage, errorMessage);
        if (error) {
          errorMessage?.classList.remove('d-none');
        } else {
          errorMessage?.classList.add('d-none');
        }
        this.checkInput(sendButton, error);
      };

      inputName.addEventListener('input', handleInputChange);
      inputMail.addEventListener('input', handleInputChange);
      inputMessage.addEventListener('input', handleInputChange);
    }
  }

  /**
 * Validates the input fields and checks if there are any errors.
 * Returns `true` if there are validation errors, otherwise `false`.
 *
 * @param {HTMLInputElement} inputName - The name input field.
 * @param {HTMLInputElement} inputMail - The email input field.
 * @param {HTMLTextAreaElement} inputMessage - The message textarea field.
 * @param {HTMLDivElement} errorMessage - The element displaying error messages.
 * @returns {boolean} - Returns `true` if there are validation errors, `false` otherwise.
 */
  ifElseSendButtonAddOrRemoveClass(
    inputName: HTMLInputElement,
    inputMail: HTMLInputElement,
    inputMessage: HTMLTextAreaElement,
    errorMessage: HTMLDivElement
  ): boolean {
    return (
      inputName.value.trim() === '' ||
      !this.isValidEmail(inputMail.value.trim()) ||
      inputMessage.value.trim() === '' ||
      (errorMessage && errorMessage.innerText.trim() !== '')
    );
  }

  /**
 * Validates an email address using a regular expression.
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns `true` if the email is valid, `false` otherwise.
 */
  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  /**
 * Enables or disables the send button based on input validation and checkbox state.
 *
 * @param {HTMLElement} sendButton - The send button element to enable/disable.
 * @param {boolean} error - Indicates whether there is a validation error.
 */
  checkInput(sendButton: HTMLElement, error: boolean) {
    if (!this.showCheckbox && !error) {
      sendButton.classList.remove('button-disabled');
      this.sendMail = true;
    } else {
      sendButton.classList.add('button-disabled');
      this.sendMail = false;
    }
  }

  /**
  * Displays a temporary email alert message and disables the send button 
  * after a successful message submission.
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
      this.showCheckbox = !this.showCheckbox;
    }
  }
}

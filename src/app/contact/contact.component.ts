import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { DeferBlockFixture } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  http = inject(HttpClient);
  inputName: any;

  constructor() {
    this.displayErrorMessageForInput();
    this.contactMe();
  }

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

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

  contactMe() {
    document.getElementById('contact-me-focus')?.addEventListener('click', () => {
      document.getElementById('input-name')?.focus();
    })
  }

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

  ifElseSendButtonAddOrRemoveClass(sendButton: HTMLElement, inputName: HTMLInputElement, inputMail: HTMLInputElement, inputMessage: HTMLTextAreaElement, errorMessage: HTMLDivElement) {
    if (inputName.value !== '' && inputMail.value !== '' && inputMessage.value !== '') {
      sendButton.classList.remove('button-disabled');
    }
    else {
      sendButton.classList.add('button-disabled');
      errorMessage.classList.remove('d-none');
    }
  }
}
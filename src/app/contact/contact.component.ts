import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { DeferBlockFixture } from '@angular/core/testing';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


  constructor() {      
    this.inputBorder();
    this.contactMe();
  }

  // buttonEnabled() {
  //   let button = document.getElementById('contact-message-send-button');
  //   let buttonAble:boolean = true;

  //   if(!buttonAble) {
  //     button?.classList.add('button-disabled');
  //   }
  //   else {
  //     button?.classList.add('button');
  //     }
  //   }

  showCheckbox!: boolean;

  contactMe() {
    document.getElementById('contact-me-focus')?.addEventListener('click', () => {
      document.getElementById('input-name')?.focus();
    })
  }

  inputBorder() {
    let inputName = document.getElementById('input-name') as HTMLInputElement;
    let inputMail = document.getElementById('input-mail') as HTMLInputElement;
    let inputMessage = document.getElementById('input-message') as HTMLTextAreaElement;

    if (inputName && inputMail && inputMessage) {
        if (inputName.value === '' || inputMail.value === '' || inputMessage.value === '') {
            inputName.classList.add('border-red');
            inputMail.classList.add('border-red');
            inputMessage.classList.add('border-red');
        } else {
          inputName.classList.remove('border-red');
            inputName.classList.add('border-green');
            inputMail.classList.add('border-green');
            inputMessage.classList.add('border-green');
        }
    }
}

toggleImage() {
let sendButton:HTMLElement | null = document.getElementById('contact-message-send-button');
let inputName = document.getElementById('input-name') as HTMLInputElement;
let inputMail = document.getElementById('input-mail') as HTMLInputElement;
let inputMessage = document.getElementById('input-message') as HTMLTextAreaElement;
let errorMessage = document.getElementById('error-message-input-fields') as HTMLDivElement;

  this.showCheckbox = !this.showCheckbox;

  if(sendButton) {
    if(this.showCheckbox) {
      if(inputName.value !== '' && inputMail.value !== '' && inputMessage.value !== '') {
        sendButton.classList.remove('button-disabled');
      }
      else {
        sendButton.classList.add('button-disabled');
        errorMessage.classList.remove('d-none');
      }
    }
      else {
        sendButton.classList.add('button-disabled');
      }
    }
  }
}
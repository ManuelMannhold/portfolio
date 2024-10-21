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
            inputName.style.border = '1px solid red';
            inputMail.classList.add('border-red');
            inputMessage.classList.add('border-red');
        } else {
            inputName.style.border = '1px solid green';
            inputMail.classList.add('border-green');
            inputMessage.classList.add('border-green');
        }
    }
}
}
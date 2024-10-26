import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor() {
    this.closeResponsiveMenu();
  }

  openResponsiveMenu() {
    let openMenu:HTMLElement | null = document.getElementById('responsive-menu');
    if(openMenu) 
    openMenu.style.transform = 'translate(0)';
  }

  closeResponsiveMenu() {
    let responsMenu = document.getElementById('responsive-menu');
    if(responsMenu) 
    responsMenu.style.transform = 'translate(10000px)';
  }

}

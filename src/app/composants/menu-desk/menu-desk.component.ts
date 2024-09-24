import {Component, ElementRef, HostListener} from '@angular/core';
import {environment} from '../../../environments/environment.environment';

@Component({
  selector: 'app-menu-desk',
  templateUrl: './menu-desk.component.html',
  styleUrl: './menu-desk.component.css'
})
export class MenuDeskComponent {
  static flyout: boolean;
  menuIcon = environment.srcIcon + 'Menu.png';
  btnVoiture = [
    {text: 'Schema', link: '/'},
    {text: '', link: '/'}
  ];

  btnCourse = [
    {text: 'Course', link: '/'},
    {text: 'Test', link: '/test'},
    {text: '', link: '/'}
  ];

  btnClassement = [
    {text: 'Récent', link: '/'},
    {text: '', link: '/'}
  ];
  btnEcurie = [
    {text: 'Toutes', link: '/'},
    {text: 'La votre', link: '/'}
  ];

  constructor() {
    MenuDeskComponent.flyout = false;
  }


  getFlyout(): boolean {
    return MenuDeskComponent.flyout;
  }


  toggleFlyout(state: boolean) {
    MenuDeskComponent.flyout = state;
  }

  flyoutClose(): void {
    this.toggleFlyout(false);
  }

  flyoutOpen(): void {
    this.toggleFlyout(true);
  }

  ngOnInit() {
  }
}

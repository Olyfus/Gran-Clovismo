import { Component, ElementRef, HostListener } from '@angular/core';
import { environment } from '../../../environments/environment.environment';

@Component({
  selector: 'app-menu-desk',
  templateUrl: './menu-desk.component.html',
  styleUrl: './menu-desk.component.css'
})
export class MenuDeskComponent {
  menuIcon = environment.srcIcon + 'Menu.png';
  static flyout: boolean;
  
  btnVoiture = [
    { text: 'Schema', link: '/voiture' },
    { text: '', link: '/' }
  ];

  btnCourse = [
    { text: 'Course', link: '/course' },
    { text: '', link: '/' }
  ];

  btnClassement = [
    { text: 'Récent', link: '/leaderboard' },
    { text: '', link: '/' }
  ];
  btnEcurie = [
    { text: 'Toutes', link: '/stable' },
    { text: 'La votre', link: '/' }
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

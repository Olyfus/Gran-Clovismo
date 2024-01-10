import { Component, ElementRef, HostListener } from '@angular/core';
import { environment } from '../../../environments/environment.environment';

@Component({
  selector: 'app-menu-desk',
  templateUrl: './menu-desk.component.html',
  styleUrl: './menu-desk.component.css'
})
export class MenuDeskComponent {
  menuIcon: string = environment.srcIcon + 'Menu.png';
  flyout: boolean;
  
  btnVoiture = [
    { text: 'Direct', link: '/direct' },
    { text: '', link: '/' }
  ];

  btnCourse = [
    { text: 'Direct', link: '/direct' },
    { text: '', link: '/' }
  ];

  btnClassement = [
    { text: 'Récent', link: '/direct' },
    { text: '', link: '/' }
  ];
  btnEcurie = [
    { text: 'Toutes', link: '/direct' },
    { text: 'La votre', link: '/' }
  ];

  constructor(private el: ElementRef) {
    this.flyout = false;
  }
  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.flyoutClose();
    }
  }

  getFlyout(): boolean {
    return this.flyout;
  }

  toggleFlyout(): void {
    if (this.getFlyout()) {
      this.flyoutClose()
    } else if (this.getFlyout() == false) {
      console.log(this.flyout);
      this.flyoutOpen()
    }
  }

  flyoutClose(): void {
    this.flyout = false;
  }

  flyoutOpen(): void {
    this.flyout = true;
  }

  ngOnInit() {
    console.log(this.menuIcon);
  }
}

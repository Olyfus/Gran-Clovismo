import {Component, HostListener} from '@angular/core';
import {environment} from '../environments/environment.environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentApplicationVersion: string = environment.appVersion;
  title: string = 'Gran Clovismo ' + this.currentApplicationVersion;
  screenHeight!: number;
  screenWidth!: number;
  small: boolean;
  medium: boolean;
  large: boolean;

  constructor() {
    this.getScreenSize();
    this.small = false;
    this.medium = false;
    this.large = false;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.setScreenType();
  }

  setScreenType() {
    if (this.screenWidth > 1024) {
      this.screenType('large')
    } else if (this.screenWidth > 768) {
      this.screenType('medium')
    } else if (this.screenWidth > 1) {
      this.screenType('small')
    } else {
      this.screenType('')
    }
  }

  screenType(type: string) {
    this.small = false;
    this.medium = false;
    this.large = false;
    switch (type) {
      case 'large' :
        this.large = true;
        break;
      case 'medium' :
        this.medium = true;
        break;
      case 'small' :
        this.small = true;
        break;
      default :
        break;
    }
    //console.log('The screen is : ' + type + ' !');
  }
}

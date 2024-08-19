import {Component, HostListener} from '@angular/core';
import {environment} from '../environments/environment.environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  static sc_type_small: boolean;
  static sc_type_medium: boolean;
  static sc_type_large: boolean;
  screenHeight!: number;
  screenWidth!: number;
  currentApplicationVersion: string = environment.appVersion;
  title: string = 'Gran Clovismo ' + this.currentApplicationVersion;

  constructor() {
    this.getScreenSize();
    AppComponent.sc_type_small = false;
    AppComponent.sc_type_medium = false;
    AppComponent.sc_type_large = false;
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
    AppComponent.sc_type_small = false;
    AppComponent.sc_type_medium = false;
    AppComponent.sc_type_large = false;
    switch (type) {
      case 'large' :
        AppComponent.sc_type_large = true;
        break;
      case 'medium' :
        AppComponent.sc_type_medium = true;
        break;
      case 'small' :
        AppComponent.sc_type_small = true;
        break;
      default :
        break;
    }
    //console.log('The screen is : ' + type + ' !');
  }
}

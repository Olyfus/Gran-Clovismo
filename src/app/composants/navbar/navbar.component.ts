import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  logoSrc: string = environment.appLogo;
  
}

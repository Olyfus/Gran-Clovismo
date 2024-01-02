import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentApplicationVersion = environment.appVersion;
  title = 'Gran-Clovismo ' + this.currentApplicationVersion;
  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Gran-Clovismo' ;
  constructor() { }

  ngOnInit() {
  }

}

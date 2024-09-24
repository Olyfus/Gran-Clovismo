import { Component } from '@angular/core';
import {environment} from "../../../environments/environment.environment";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  version = environment.appVersion;
}

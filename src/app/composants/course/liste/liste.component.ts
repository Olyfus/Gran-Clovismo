import {Component} from '@angular/core';
import {ICourse} from "../../../common/interfaces/course.interface";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {
  private courses: ICourse[] | undefined;

  constructor() {
  }

  ngOnInit() {
    this.courses = [];
  }
}

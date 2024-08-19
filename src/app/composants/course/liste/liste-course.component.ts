import {Component} from '@angular/core';
import {ICourse} from "../../../common/interfaces/course.interface";

@Component({
  selector: 'composant-liste-course',
  templateUrl: './liste-course.component.html',
  styleUrl: './liste-course.component.css'
})
export class ListeCourseComponent {
  private courses: ICourse[] | undefined;

  constructor() {
  }

  ngOnInit() {
    this.courses = [];
  }
}

import {Component} from '@angular/core';
import {VoitureObj} from "../../common/objects/voiture.object";

@Component({
  selector: 'app-test-course',
  templateUrl: './test-course.component.html',
  styleUrl: './test-course.component.css'
})

export class TestCourseComponent {
  voiture_1: VoitureObj;
  voiture_2: VoitureObj;
  voiture_3: VoitureObj;

  constructor() {
    this.voiture_1 = new VoitureObj();
    this.voiture_2 = new VoitureObj();
    this.voiture_3 = new VoitureObj();
  }

  ngOnInit() {

  }
}

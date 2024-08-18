import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  screenHeight!: number;
  screenWidth!: number;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    let tempSH = window.innerHeight;
    let tempSW = window.innerWidth;
    if (tempSH > 20) {
      tempSH = tempSH - 20;
    }
    if (tempSW > 20) {
      tempSW = tempSW - 20;
    }
    if (tempSH < 0) {
      tempSH = 0;
    }
    if (tempSW < 0) {
      tempSW = 0;
    }
    this.screenHeight = tempSH;
    this.screenWidth = tempSW;
  }
}

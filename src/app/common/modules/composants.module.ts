import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListeCourseComponent} from "../../composants/course/liste/liste-course.component";
import {PodiumCardComponent} from "../../composants/podium/card/card.component";
import {ControlleurModule} from "./controlleur.module";
import {RuntimeModule} from "./runtime.module";


@NgModule({
  declarations: [
    ListeCourseComponent,
    PodiumCardComponent,
  ],
  imports: [
    CommonModule,
    ControlleurModule,
    RuntimeModule,
  ],
  exports: [
    ListeCourseComponent,
    PodiumCardComponent,
    ControlleurModule,
    RuntimeModule,
  ]
})
export class ComposantsModule {
}

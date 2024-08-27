import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListeCourseComponent} from "../../composants/course/liste/liste-course.component";
import {PodiumCardComponent} from "../../composants/podium/card/card.component";
import {ControlleurModule} from "./controlleur.module";
import {RuntimeModule} from "./runtime.module";
import {InscriptionComponent} from "../../composants/auth/inscription/inscription.component";
import {LoginComponent} from "../../composants/auth/login/login.component";


@NgModule({
  declarations: [
    ListeCourseComponent,
    PodiumCardComponent,
    InscriptionComponent,
    LoginComponent,
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
    InscriptionComponent,
    LoginComponent,
  ]
})
export class ComposantsModule {
}

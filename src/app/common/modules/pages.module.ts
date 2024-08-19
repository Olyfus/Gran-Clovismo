import {NgModule} from '@angular/core';
import {HomeComponent} from '../../pages/home/home.component';
import {VoitureComponent} from '../../pages/voiture/voiture.component';
import {CourseComponent} from '../../pages/course/course.component';
import {EcuriesComponent} from '../../pages/ecuries/ecuries.component';
import {LeaderboardComponent} from '../../pages/leaderboard/leaderboard.component';
import {CommonModule} from "@angular/common";
import {TestCourseComponent} from "../../pages/test-course/test-course.component";
import {MapComponent} from "../../composants/map/map.component";
import {ComposantsModule} from "./composants.module";

@NgModule({
  declarations: [
    HomeComponent,
    VoitureComponent,
    EcuriesComponent,
    CourseComponent,
    LeaderboardComponent,
    TestCourseComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    ComposantsModule,
  ]
})

export class PagesModule {
}

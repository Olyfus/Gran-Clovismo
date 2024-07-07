import {NgModule} from '@angular/core';
import {HomeComponent} from '../../pages/home/home.component';
import {VoitureComponent} from '../../pages/voiture/voiture.component';
import {ListeComponent} from '../../composants/course/liste/liste.component';
import {CourseComponent} from '../../pages/course/course.component';
import {ClassementComponent} from '../../pages/classement/classement.component';
import {EcuriesComponent} from '../../pages/ecuries/ecuries.component';
import {LeaderboardComponent} from '../../pages/leaderboard/leaderboard.component';
import {StableComponent} from '../../pages/stable/stable.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    HomeComponent,
    VoitureComponent,
    EcuriesComponent,
    ClassementComponent,
    CourseComponent,
    ListeComponent,
    StableComponent,
    LeaderboardComponent,
  ],
  imports: [
    CommonModule,
  ]
})

export class PagesModule {
}

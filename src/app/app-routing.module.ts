import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {VoitureComponent} from './pages/voiture/voiture.component';
import {CourseComponent} from './pages/course/course.component';
import {LeaderboardComponent} from './pages/leaderboard/leaderboard.component';
import {PodiumComponent} from "./pages/podium/podium.component";
import {TestCourseComponent} from "./pages/test-course/test-course.component";
import {EcuriesComponent} from "./pages/ecuries/ecuries.component";
import {LegalComponent} from "./pages/legal/legal.component";
import {ConditionGeneralesComponent} from "./pages/condition-generales/condition-generales.component";
import {AuthComponent} from "./pages/auth/auth.component";

export const routes: Routes = [
  {path: 'legal', component: LegalComponent},
  {path: 'cgu', component: ConditionGeneralesComponent},
  {path: 'ecurie', component: EcuriesComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: 'course', component: CourseComponent},
  {path: 'voiture', component: VoitureComponent},
  {path: 'podium', component: PodiumComponent},
  {path: 'test', component: TestCourseComponent},
  {path: 'login', component: AuthComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

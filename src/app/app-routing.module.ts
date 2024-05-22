import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VoitureComponent } from './pages/voiture/voiture.component';
import { CourseComponent } from './pages/course/course.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { StableComponent } from './pages/stable/stable.component';

const routes: Routes = [
  { path: 'stable', component: StableComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'course', component: CourseComponent },
  { path: 'voiture', component: VoitureComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './common/modules/pages.modules';
import { MenuDeskComponent } from './composants/menu-desk/menu-desk.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { FooterComponent } from './composants/footer/footer.component';
import { EcuriesComponent } from './pages/ecuries/ecuries.component';
import { ClassementComponent } from './pages/classement/classement.component';
import { CourseComponent } from './pages/course/course.component';
import { ListeComponent } from './composants/course/liste/liste.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MenuDeskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

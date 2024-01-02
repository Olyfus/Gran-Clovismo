import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { VoitureComponent } from './pages/voiture/voiture.component';
import { FooterComponent } from './composants/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoitureComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PagesModule} from './common/modules/pages.module';
import {MenuDeskComponent} from './composants/menu-desk/menu-desk.component';
import {NavbarComponent} from './composants/navbar/navbar.component';
import {FooterComponent} from './composants/footer/footer.component';
import {ControlleurModule} from './common/modules/controlleur.module';
import {PodiumComponent} from './pages/podium/podium.component';
import {MapComponent} from './composants/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MenuDeskComponent,
    PodiumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    ControlleurModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}

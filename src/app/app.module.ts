import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PagesModule} from './common/modules/pages.module';
import {NavigationModule} from "./common/modules/navigation.module";
import { LegalComponent } from './pages/legal/legal.component';
import { ConditionGeneralesComponent } from './pages/condition-generales/condition-generales.component';
import { MenuPhoneComponent } from './composants/menu-phone/menu-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    LegalComponent,
    ConditionGeneralesComponent,
    MenuPhoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavigationModule,
    PagesModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}

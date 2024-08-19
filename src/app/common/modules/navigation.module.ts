import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "../../composants/footer/footer.component";
import {NavbarComponent} from "../../composants/navbar/navbar.component";
import {MenuDeskComponent} from "../../composants/menu-desk/menu-desk.component";
import {AppRoutingModule} from "../../app-routing.module";


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    MenuDeskComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    MenuDeskComponent,
  ]
})
export class NavigationModule {
}

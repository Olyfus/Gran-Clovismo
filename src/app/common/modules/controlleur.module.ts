import { NgModule } from '@angular/core';
import { BaseComponent } from '../../composants/controlleur/base/base.component';
import { OrdinateurComponent } from '../../composants/controlleur/ordinateur/ordinateur.component';
import { TabletteComponent } from '../../composants/controlleur/tablette/tablette.component';
import { TelephoneComponent } from '../../composants/controlleur/telephone/telephone.component';

@NgModule({
  declarations: [
    BaseComponent,
    OrdinateurComponent,
    TabletteComponent,
    TelephoneComponent,
  ],
  imports: [
  ]
})
export class ControlleurModule { }

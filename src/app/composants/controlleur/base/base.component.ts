import {Component, HostListener, Input} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {VoitureObj} from "../../../common/objects/voiture.object";

@Component({
  selector: 'control-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

  @Input() input_voiture !: VoitureObj;
  sm!: boolean;
  md!: boolean;
  lg: boolean = true;
  voiture: VoitureObj;

  constructor() {
    this.changeScreenSize();
    this.voiture = this.input_voiture;
  }

  ngOnInit() {
    this.changeScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  changeScreenSize() {
    this.sm = AppComponent.sc_type_small;
    this.md = AppComponent.sc_type_medium;
    this.lg = AppComponent.sc_type_large;
  }

  control_clicked() {

  }
}

import {Component, Input} from '@angular/core';
import {ICase} from "../../common/interfaces/case.interface";
import {CasesObj} from "../../common/objects/case.object";
import {built_maps, spa_cases} from "../../common/enums/map.enum";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  @Input() input_map !: number;
  maps!: string[];
  map_name!: string;
  map_id!: string;
  usemap!: string;
  alt!: string;
  src!: string;
  cases!: ICase[];

  constructor() {
  }

  ngOnInit() {
    this.maps = built_maps;
    if (this.input_map != undefined || this.input_map != null) {
      // not out of range
      if (this.maps[this.input_map] != undefined) {
        this.map_name = this.maps[this.input_map];
      } else {
        this.map_name = "N/A";
      }
    } else {
      this.map_name = "N/A";
    }
    this.init_name();
    this.start_case_building();
  }

  feed(): void {
    if (this.cases) {
      this.wipe(this.cases)
    }
  }

  wipe(obj: any): void {
    obj = null
  }

  init_name(): void {
    this.alt = this.map_name + ".jpg";
    this.usemap = "#" + this.map_name;
    this.src = "../../../assets/circuits/" + this.alt;
    this.map_id = this.map_name;
  }

  start_case_building(): void {
    let list: CasesObj[] = [];
    if (this.map_name.includes('Spa')) {
      this.cases = spa_cases;
    }
    for (let i = 0; i < this.cases.length; i++) {
      let c = new CasesObj(this.cases[i]);
      if (c.coords == undefined) {
        c.get_cords();
      } else {
        c.get_points_from_cords();
      }
      list.push(c);
    }
  }
}

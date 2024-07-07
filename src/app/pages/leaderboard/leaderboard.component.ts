import {Component} from '@angular/core';
import {IPodiums} from "../../common/interfaces/podium.interface";


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})

export class LeaderboardComponent {
  public podiums!: IPodiums[];

  constructor() {
    this.podiums = [
      {name: "spa", firstPlace: "clovis", secondPlace: "laurie"},
      {name: "nurb", firstPlace: "mael", secondPlace: "ad"},
      {name: "le mans", firstPlace: "ad", secondPlace: "mael"},
      {name: "le mans", firstPlace: "ad", secondPlace: "mael"},
      {name: "le mans", firstPlace: "ad", secondPlace: "mael"},
    ];
  }

  ngOnInit() {
  }
}

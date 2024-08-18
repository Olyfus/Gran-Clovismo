import {Component} from '@angular/core';
import {IPodiums} from "../../common/interfaces/podium.interface";
import {Navigation, Router} from "@angular/router";

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.css'
})
export class PodiumComponent {
  selectedPodium: IPodiums | undefined;
  navigation: Navigation | null;

  constructor(private router: Router) {
    this.navigation = this.router.getCurrentNavigation();
  }

  ngOnInit() {
    this.selectedPodium = this.navigation?.extras.state?.['podium'] as IPodiums;
  }
}

import {Component, Input} from '@angular/core';
import {IPodiums} from "../../../common/interfaces/podium.interface";
import {Route, Router} from "@angular/router";

const emptyPodium: IPodiums = {
  id: 0,
  name: 'N/A',
  firstPlace: 'N/A',
  secondPlace: 'N/A',
}

@Component({
  selector: 'podium-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class PodiumCardComponent {
  podium !: IPodiums;

  @Input() obj: IPodiums | undefined;
  @Input() podiumId: IPodiums | undefined;

  currentPath: string = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (this.obj) {
      this.selectPodium(this.obj);
    } else if (this.podiumId) {
      //this.selectPodium()
    } else {
      this.selectPodium(emptyPodium);
    }
    this.currentPath = this.router.url;
  }

  selectPodium(pod: IPodiums) {
    this.podium = pod;
  }

  onCardClick(): void {
    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => this.router.navigate(['/podium'], {state: {podium: this.podium}}))
  }
}

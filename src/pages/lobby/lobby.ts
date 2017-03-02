import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html'
})
export class LobbyPage {



shownGroup = null;
diseases = [
    { title: "LVBP", icon: "baseball"},
    { title: "MLB", icon: "baseball"},
    { title: "LIDOM", icon: "baseball"},
    { title: "LIGA ESPAÑOLA", icon: "football"},
    { title: "UCL", icon: "football"},
    { title: "NBA", icon: "basketball"},
    { title: "NFL", icon: "american-football"}
  ];

  constructor(public navCtrl: NavController) {
  }

toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};

homeOptions = {
  initialSlide: 0,
  loop: true,
  autoplay:2000,
  autoplayDisableOnInteraction: false
};

}

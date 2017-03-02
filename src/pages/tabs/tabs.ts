import { Component} from '@angular/core';

import { NavParams } from 'ionic-angular';

import { LobbyPage } from '../lobby/lobby';
import { CompeticionesPage } from '../competiciones/competiciones';
import { AlineacionesPage } from '../alineaciones/alineaciones';
import { ReferirPage } from '../referir/referir';
import { CajeroPage } from '../cajero/cajero';


@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = LobbyPage;
  tab2Root: any = CompeticionesPage;
  tab3Root: any = AlineacionesPage;
  tab4Root: any = ReferirPage;
  tab5Root: any = CajeroPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
        this.mySelectedIndex = navParams.data.tabIndex || 0;

  }

}

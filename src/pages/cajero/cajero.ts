import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav} from 'ionic-angular';


@Component({
  selector: 'page-cajero',
  templateUrl: 'cajero.html'
})
export class CajeroPage {
@ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CajeroPage');
  }

		
}
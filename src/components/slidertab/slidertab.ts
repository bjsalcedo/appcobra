import { Component } from '@angular/core';
import { ViewController} from 'ionic-angular'
import {  NavController } from 'ionic-angular';
import { SettingsPage } from '../../pages/settings/settings';

@Component({
  selector: 'slidertab',
  templateUrl: 'slidertab.html'
})
export class SlidertabComponent {

  

  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {
    
  }

  openPage(){
  	console.log('hizo click');
  	this.navCtrl.push(SettingsPage,{});
  }


}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-lobby',
  templateUrl: 'login.html'
})

export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;



  constructor(public navCtrl: NavController, public userData: UserData) { }

  onLogin(form: NgForm) {
    this.submitted = true;
    console.log(this.login.username);
    console.log(this.login.username);
    if (form.valid) {
      this.userData.login(this.login.username);
      this.navCtrl.push(TabsPage);
    }
  }

  onSignup() {
    this.navCtrl.push(RegisterPage);
  }
}

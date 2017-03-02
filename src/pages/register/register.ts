import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-lobby',
  templateUrl: 'register.html'
})
export class RegisterPage {
  signup: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.navCtrl.push(TabsPage);
    }
  }
}

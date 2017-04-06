import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { LoginPage } from '../login/login';

import { AngularFire } from 'angularfire2';


@Component({
  selector: 'page-message-reset-password',
  templateUrl: 'message-reset-password.html'
})
export class MessageResetPasswordPage {
	public get parameters() {
		return [NavController];
	}
	
   messagePassword: boolean;

	constructor(
		public navCtrl: NavController,
		private navParams: NavParams,
		private af: AngularFire,
	) { 

		this.messagePassword = this.navParams.get("messagePassword") || false;

  }

	LoginPage() {
		this.navCtrl.setRoot(LoginPage);
	}
}
import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { LoginPage } from '../login/login';

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
		private navParams: NavParams
	) { 

		// 

		this.messagePassword = this.navParams.get("messagePassword") || false;

  }

  // Function for switch page

	LoginPage() {
		this.navCtrl.setRoot(LoginPage);
	}
}
import { Component, ViewChild} from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { ResetPasswordPage } from '../reset-password/reset-password';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.html',

})
export class HomePage{
	messagePassword: boolean;

	constructor(
		public navCtrl: NavController,
		private navParams: NavParams
		) {
			this.messagePassword = this.navParams.get("messagePassword") || false;
		}

		RegisterPage() {
			this.navCtrl.push(RegisterPage);
		}

		LoginPage() {
			this.navCtrl.push(LoginPage);
		}
	}
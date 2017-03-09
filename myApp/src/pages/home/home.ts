import { Component, ViewChild} from '@angular/core';

import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { ResetPasswordPage } from '../reset-password/reset-password';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.html',

})
export class HomePage{

	constructor(public navCtrl: NavController) {}

		RegisterPage() {
			this.navCtrl.push(RegisterPage);
		}

		LoginPage() {
			this.navCtrl.push(LoginPage);
		}
	}
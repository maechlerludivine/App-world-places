import { Component, ViewChild } from '@angular/core';
import { Contacts } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { PlacesPage } from '../places/places';
import { AddContactPage } from '../add-contact/add-contact';

import { AngularFire } from 'angularfire2';

declare var google;

@Component({
	selector: 'app-home',
	templateUrl: 'home.html',

})
export class HomePage {
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

		this.af.auth.subscribe(auth => {
			console.log(auth)
			this.navCtrl.setRoot(PlacesPage);
		});

	}
	RegisterPage() {
		this.navCtrl.push(RegisterPage);
	}

	LoginPage() {
		this.navCtrl.push(LoginPage);
	}
}
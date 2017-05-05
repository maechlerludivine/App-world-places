import { Component, ViewChild } from '@angular/core';
import { Contacts } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { PlacesPage } from '../places/places';
import { AddContactPage } from '../add-contact/add-contact';
import { LocatePage } from '../locate/locate';
import { UserService, AuthService } from '../../app/services';

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

	constructor(
		public navCtrl: NavController,
		private navParams: NavParams,
		private af: AngularFire,
		private userService: UserService
	) {

		this.af.auth.subscribe(auth => {
			console.log(auth)
			if (auth)
				this.navCtrl.setRoot(PlacesPage);
			console.log("auth > ", auth)
			this.userService.setUserData(auth);
		});

	}
	RegisterPage() {
		this.navCtrl.push(RegisterPage);
	}

	LoginPage() {
		this.navCtrl.push(LoginPage);
	}
}
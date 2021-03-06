import { Component, ViewChild } from '@angular/core';
import { Contacts } from '@ionic-native/contacts';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { PlacesPage } from '../places/places';
import { FavoritesPage } from '../favorites/favorites';
import { UserService, AuthService } from '../../app/services';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

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
		private afAuth: AngularFireAuth,
		private userService: UserService
	) {

		// Get data of user authenticated and switch page

		this.afAuth.authState.subscribe(auth => {
			if (auth) {
				this.navCtrl.setRoot(FavoritesPage);
				this.userService.setUserData(auth);
			}
		});

	}

	// Action for switch page

	registerPage() {
		this.navCtrl.push(RegisterPage);
	}

	loginPage() {
		this.navCtrl.push(LoginPage);
	}
}
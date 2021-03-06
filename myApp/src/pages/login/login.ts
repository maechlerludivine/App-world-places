import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { HomePage } from '../home/home';
import { PlacesPage } from '../places/places';
import { FavoritesPage } from '../favorites/favorites';
import { UserService, AuthService } from '../../app/services';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Component({
	selector: 'app-login',
	templateUrl: 'login.html'
})
export class LoginPage {

	loginCredentials = {
		email: '', 
		password: '' 
		
	};
	email: AbstractControl;
	password: AbstractControl;
	error: string;
	submitted = false;

	constructor(
		private navCtrl: NavController,
		private authService: AuthService,
		private userService: UserService,
		public afAuth: AngularFireAuth
	) { }

	// get data user profile authenticated and switch pas

	login() {
		this.authService.login(this.loginCredentials).then(res => {
			this.userService.setUserData(res);
			this.userService.getProfil().subscribe(data => {
			});
		})
	}

	// Function for switch page

	ResetPasswordPage() {
		this.navCtrl.push(ResetPasswordPage);
	}

	RegisterPage() {
		this.navCtrl.push(RegisterPage);
	}
}
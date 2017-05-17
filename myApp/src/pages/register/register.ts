import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService, UserService } from '../../app/services';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { NgForm } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { UserCredentials, UserProfile } from '../../app/shared';


@Component({
	selector: 'app-register',
	templateUrl: 'register.html'
})

export class RegisterPage {

	form: RegisterForm;
	submitted = false;

	constructor(
		public navCtrl: NavController,
		public authService: AuthService,
		private userService: UserService) {
		this.form = {
			email: '',
			password: '',
			firstname: '',
			lastname: ''
		}
	}

	// Defined credentials user for registration

	register() {
		let credentials: UserCredentials = {
			email: this.form.email,
			password: this.form.password
		};
		this.authService.create(credentials).then((res => {
			let userProfile: UserProfile = {
				firstname: this.form.firstname,
				lastname: this.form.lastname
			}
			this.userService.setUserData(res);
			console.log(res);
			this.userService.getProfil().subscribe(data => {
			});
			// Update profile user
			this.userService.updateMyProfile(userProfile).then(res => {
			})
		}))
	}

	// Function for switch page

	login() {
		this.navCtrl.push(LoginPage);
	}	
}

class RegisterForm {
	email: string;
	password: string;
	lastname: string;
	firstname: string
}
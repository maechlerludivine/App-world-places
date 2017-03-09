import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService, UserService } from '../../app/services';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { NgForm } from '@angular/forms';

import { AngularFireModule, AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

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

	register() {
		console.log('this.registerForm > ', this.form);
		let credentials: UserCredentials = {
			email: this.form.email,
			password: this.form.password
		};
		this.authService.create(credentials).then((res => {
			let userProfile: UserProfile = {
				firstname: this.form.firstname,
				lastname: 'test' //this.registerForm.lastname
			}
			
			this.userService.updateMyProfile(userProfile).then(res => {
				console.log("res profile > ", res);
			})
		}))
	}
}

class RegisterForm {
	email: string;
	password: string;
	lastname: string;
	firstname: string
}
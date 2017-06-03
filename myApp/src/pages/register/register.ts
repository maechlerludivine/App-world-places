import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService, UserService } from '../../app/services';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { NgForm } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserCredentials, UserProfile } from '../../app/shared';


@Component({
	selector: 'app-register',
	templateUrl: 'register.html'
})

@Injectable()
export class RegisterPage {

	form: RegisterForm;
	submitted = false;
	message:string;

	constructor(
		public navCtrl: NavController,
		public authService: AuthService,
		private userService: UserService,
		fb: FormBuilder,) {
		this.form = {
			email: '',
			password: '',
			firstname: '',
			lastname: ''
		}
	}

	// Defined credentials user for registration

	register() {
		this.message = "";
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
			this.userService.getProfil().subscribe(data => {
			});
			// Update profile user
			this.userService.updateMyProfile(userProfile)
			.then(res => {
				
			}).catch((Error) => {
					if (Error['code'] == "auth/invalid-email") {
						this.message = "Email invalide"
					} else if (Error['code'] == "auth/weak-password") {
						this.message = "Le mot de passe doit être de 6 caractères minimun"
					} else if (Error['code'] == "auth/email-already-in-use") {
						this.message = "Email déja utilisé"
					} else if (Error['code'] == "auth/operation-not-allowed") {
						this.message = "Error"
					}				
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
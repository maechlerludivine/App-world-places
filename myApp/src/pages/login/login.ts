import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { HomePage } from '../home/home';
import { UserService, AuthService } from '../../app/services';
import { AngularFireModule, AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


@Component({
  selector: 'app-login',
  templateUrl: 'login.html'
})
export class LoginPage {

	loginCredentials = {email: '', password: ''};
	email:AbstractControl;
	password: AbstractControl;
	error:any;
	submitted = false;

  constructor(
	  private navCtrl: NavController,
	  private authService: AuthService,
	  private userService: UserService
	  ) { }

  	login() {
		this.authService.login(this.loginCredentials).then(res => {
			this.userService.getProfil().subscribe(data => {
			})
		})
	}
	ResetPasswordPage() {
		this.navCtrl.push(ResetPasswordPage);
	}
	// logout() {
	// 	this.af.auth.logout();
	// }
}
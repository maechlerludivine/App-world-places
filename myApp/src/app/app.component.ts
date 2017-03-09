import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { AngularFireModule, AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

export interface PageInterface {
  title: string;
  component: any;
}

@Component({
	selector:'app-root',
	templateUrl: './app.html',
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;
	private rootPage: any;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageInterface[] = [
    { title: 'Login', component: LoginPage },
    { title: 'Register', component: RegisterPage},
    { title: 'Home', component: HomePage },
		{ title: 'ResetPassword', component: ResetPasswordPage}
  ];


	constructor(public af: AngularFire,private platform : Platform) {
		this.af.auth.subscribe(auth => console.log(auth));
		this.rootPage = HomePage;

		this.initializeApp();
	}

	login() {
		this.af.auth.login({
			email: 'email@example.com',
			password: 'password',
		});
	}
 
 initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();
			Splashscreen.hide();
		});
	}
}
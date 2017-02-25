import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { AngularFireModule, AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

export interface PageInterface {
	title: string;
	component: any;
}

@Component({
	selector:'app-root',
	templateUrl: './app.html'
})
export class MyApp {

	appPages: PageInterface[] = [
		{ title: 'Login', component: LoginPage },
		{ title: 'Register', component: RegisterPage,}
	];

	constructor(public af: AngularFire) {
		this.af.auth.subscribe(auth => console.log(auth));
	}

	login() {
		this.af.auth.login({
			email: 'email@example.com',
			password: 'password',
		});
	}
 
/*  constructor(platform: Platform) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();
			Splashscreen.hide();
		});
	}*/
}


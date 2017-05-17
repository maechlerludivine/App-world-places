import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';

import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { PlacesPage } from '../pages/places/places';
import { DetailsPlacePage } from '../pages/details-place/details-place';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { FavoritesPage } from '../pages/favorites/favorites';
import { PlacesService, FavoritesService } from './services';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


declare var google;

export interface PageInterface {
	title: string;
	component: any;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
})

export class MyApp {

	@ViewChild(Nav) nav: Nav;
	private rootPage: any;
	public map: any;

	// List of pages that can be navigated to from the left menu
	// the left menu only works after login
	// the login page disables the left menu
	appPages: PageInterface[] = [
		{ title: 'Login', component: LoginPage },
		{ title: 'Register', component: RegisterPage },
		{ title: 'Home', component: HomePage },
		{ title: 'ResetPassword', component: ResetPasswordPage },
		{ title: 'Places', component: PlacesPage },
		{ title: 'DetailsPlace', component: DetailsPlacePage },
		{ title: 'Favorites', component: FavoritesPage },
	];

	constructor(
		public afAuth: AngularFireAuth,
		private platform: Platform,
		public placesService: PlacesService,
		public FavoritesService: FavoritesService,
		private statusBar: StatusBar,
		private splashScreen: SplashScreen
	) {
		this.rootPage = HomePage;
		this.initializeApp();
	}

	//initialize app

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.show();
		});
	}
}
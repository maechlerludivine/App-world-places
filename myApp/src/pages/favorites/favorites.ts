import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService, UserService, FavoritesService } from '../../app/services';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { NgForm } from '@angular/forms';

import { AngularFireModule, AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { UserCredentials, UserProfile, Favorites } from '../../app/shared';


@Component({
	selector: 'app-favorites',
	templateUrl: 'favorites.html'
})

export class FavoritesPage {

	constructor(
		public navCtrl: NavController,
		private userService: UserService,
        public favoritesService: FavoritesService
        ) {
	}

	favorites() {
		return this.favoritesService.getFavorites();
	}	
}

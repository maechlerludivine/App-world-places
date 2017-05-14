import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService, UserService, FavoritesService, PlacesService } from '../../app/services';
import { LoginPage } from '../login/login';
import { PlacesPage } from '../places/places';
import { HomePage } from '../home/home';
import { NgForm } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { UserCredentials, UserProfile, Favorites } from '../../app/shared';


@Component({
	selector: 'app-favorites',
	templateUrl: 'favorites.html'
})

export class FavoritesPage {

	myFavorites;
	places = [];

	constructor(
		public navCtrl: NavController,
		private userService: UserService,
		public favoritesService: FavoritesService,
		public placesService: PlacesService
	) {

		// get data favorites with an observable
		this.myFavorites = [];
		this.favoritesService.getFavorites().subscribe(val => {this.myFavorites = val;
	});
}

	// Action push for switch page

	goToPlaces() {
		this.navCtrl.push(PlacesPage);
	}
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService, UserService, FavoritesService, PlacesService } from '../../app/services';
import { LoginPage } from '../login/login';
import { PlacesPage } from '../places/places';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { NgForm } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { UserCredentials, UserProfile, Favorites, UserData } from '../../app/shared';


@Component({
	selector: 'app-favorites',
	templateUrl: 'favorites.html'
})

export class FavoritesPage {

	myFavorites;
	places = [];
	userData: UserData;

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

  goToProfile(userData: UserData) {
      this.navCtrl.push(ProfilePage, {
        item:userData
      });
  }

	goToPlaces() {
		this.navCtrl.push(PlacesPage);
	}
}

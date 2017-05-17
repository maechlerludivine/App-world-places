import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, NavParams, Platform } from 'ionic-angular';
import { AuthService, PlacesService, UserService } from '../../app/services';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { DetailsPlacePage } from '../details-place/details-place';
import { FavoritesPage } from '../favorites/favorites';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';
import { MenuController } from 'ionic-angular';
import 'rxjs/add/observable/of';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-places',
  templateUrl: 'places.html',
  providers: [PlacesService]
})
export class PlacesPage implements OnInit {
  places = [];

  constructor(
    public navCtrl: NavController,
    private placesService: PlacesService,
    private authService: AuthService,
    private geolocation: Geolocation,
		public afAuth: AngularFireAuth,
    public menuCtrl: MenuController,
    private userService: UserService,
  ) {

  }

  // Get user's current position

  ngOnInit() {
    this.geolocation.getCurrentPosition().then(pos => {
      this.getPlacesList(pos);
    });

    let watch = this.geolocation.watchPosition().subscribe(pos => {
    });

    // to stop watching
    watch.unsubscribe();
  }

  // Get data api Google Places

  getPlacesList(pos) {
    this.placesService.getPlacesList(pos.coords.latitude, pos.coords.longitude).subscribe(res => {
      this.places = res.results
    });
  }

  // Functions for switch pages

  goToFavorites() {
      this.navCtrl.push(FavoritesPage);
  }

  getDetailsPlace(id: string) {
    this.navCtrl.push(DetailsPlacePage, {
      item: id
    });
  }
}
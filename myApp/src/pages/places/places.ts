import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, NavParams, Platform } from 'ionic-angular';
import { AuthService, PlacesService, UserService } from '../../app/services';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { DetailsPlacePage } from '../details-place/details-place';
import { ProfilePage } from '../profile/profile';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';
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
		public afAuth: AngularFireAuth
  ) {

  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      this.getPlacesList(pos);
    });

    let watch = this.geolocation.watchPosition().subscribe(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    });

    // to stop watching
    watch.unsubscribe();
  }

  getPlacesList(pos) {
    console.log("coords > ", pos)
    this.placesService.getPlacesList(pos.coords.latitude, pos.coords.longitude).subscribe(res => {
      console.log("res > ", res);
      this.places = res.results
    });
  }

  logout() {
      this.afAuth.auth.signOut();
      this.navCtrl.setRoot(LoginPage);
  }

  goToProfile() {
      this.navCtrl.push(ProfilePage);
  }


  getDetailsPlace(id: string) {
    this.navCtrl.push(DetailsPlacePage, {
      item: id
    });
  }
}
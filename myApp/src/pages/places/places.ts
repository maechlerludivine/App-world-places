import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, NavParams, Platform } from 'ionic-angular';
import { AuthService, PlacesService } from '../../app/services';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { DetailsPlacePage } from '../details-place/details-place';
import { Geolocation } from 'ionic-native';


import { AngularFireModule, AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

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
  ) {

  }

  ngOnInit() {
    Geolocation.getCurrentPosition().then(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      this.getPlaces(pos);
    });

    let watch = Geolocation.watchPosition().subscribe(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    });

    // to stop watching
    watch.unsubscribe();
  }

  getPlaces(pos) {
    console.log("coords > ", pos)
    this.placesService.getPlaces(pos.coords.latitude, pos.coords.longitude).subscribe(res => {
      console.log("res > ", res);
      this.places = res.results
    });
  }

  logout() {
    this.navCtrl.setRoot(LoginPage);
  }

  DetailsPlace() {
    this.navCtrl.push(DetailsPlacePage);
  }
}
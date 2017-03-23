import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, NavParams, Platform } from 'ionic-angular';
import { AuthService, PlacesService } from '../../app/services';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { HomePage } from '../pages/home/home';
import { Geolocation } from 'ionic-native';

import { AngularFireModule, AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-places',
  templateUrl: 'places.html',
  providers: [PlacesService]
})
export class PlacesPage {
  places = {};

  constructor(
    public navCtrl: NavController,
    private placesService: PlacesService
  ) {
    Geolocation.getCurrentPosition().then(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      this.placesService.getPlaces(pos.coords.latitude, pos.coords.longitude).subscribe(res => {
        console.log("res > ", res);
      });
    });

    let watch = Geolocation.watchPosition().subscribe(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      this.placesService.getPlaces(pos.coords.latitude, pos.coords.longitude).subscribe(res => {
        console.log("res > ", res);
      });
    });

    // to stop watching
    watch.unsubscribe();
  }
  ngOnInit() {
    this.
  }
}
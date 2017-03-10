import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, NavParams, Platform } from 'ionic-angular';
import { AuthService } from '../../app/services/authService';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { HomePage } from '../pages/home/home';
import { Geolocation } from 'ionic-native';

import { AngularFireModule, AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

declare var google;

@Component({
  selector: 'app-places',
  templateUrl: 'places.html'
})
export class PlacesPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController) {
 
  }
 
  ionViewLoaded(){
    this.loadMap();
  }
 
  loadMap(){
 
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  }
}
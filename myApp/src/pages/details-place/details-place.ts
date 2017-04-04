import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, NavParams, Platform } from 'ionic-angular';
import { AuthService, PlacesService } from '../../app/services';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { PlacesPage } from '../places/places';
import { Geolocation } from 'ionic-native';

@Component({
  selector: 'page-details-place',
  templateUrl: 'details-place.html',
  providers: [PlacesService]
})
export class DetailsPlacePage implements OnInit {
  places = [];

  constructor(
    public navCtrl: NavController,
    private placesService: PlacesService,
    private authService: AuthService,
  ) {

  }

  ngOnInit() {

  }

}

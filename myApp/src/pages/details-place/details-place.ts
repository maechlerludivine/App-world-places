import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, NavParams, Platform } from 'ionic-angular';
import { AuthService, PlacesService } from '../../app/services';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { PlacesPage } from '../places/places';
import { Geolocation } from 'ionic-native';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'page-details-place',
  templateUrl: 'details-place.html',
  providers: [PlacesService]
})
export class DetailsPlacePage {
  placeid:string;

  constructor(
    public navCtrl: NavController,
    private placesService: PlacesService,
    private authService: AuthService,
    public navParams: NavParams
  ) {
    
    this.placeid = this.navParams.get('item');
    console.log(this.navParams.get('item'))
    this.getPlacesDetails(this.placeid);
  }

  getPlacesDetails(placeid) {
    console.log("placeid > ", placeid);
    this.placesService.getPlacesDetails(placeid).subscribe(res => {
      console.log("res >", res)
      this.placeid = res.results
    });
  }
}

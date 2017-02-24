import { Component, OnInit } from '@angular/core';

import { NavController} from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { Register } from '../pages/register/register';
import { Login } from '../pages/login/login';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.html'
})
export class HomePage{

	constructor() {

	}
}
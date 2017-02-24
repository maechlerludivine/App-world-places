import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../app/services/authService';
import { Register } from '../pages/register/register';
import { Home } from '../pages/home/home';

@Component({
  selector: 'app-login',
  templateUrl: 'login.html'
})
export class LoginPage {

 	loginCredentials = {email: '', password: ''};

  constructor(public navCtrl: NavController) {

  }

}
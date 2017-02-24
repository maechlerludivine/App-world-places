import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { AngularFireModule, AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  selector:'app-root',
  templateUrl: './app.html'
})
export class MyApp {

  page: PageEnum;
  type = PageEnum;
  rootPage: any;

  //todo service qui récupère si je suis authentifié

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
    this.page = PageEnum.signin;
    this.rootPage = HomePage;
  }

  login() {
    this.af.auth.login({
      email: 'email@example.com',
      password: 'password',
    });
  }
 
/*  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }*/
}

enum PageEnum {
  logged = 0,
  signin = 1,
  signup = 2
}

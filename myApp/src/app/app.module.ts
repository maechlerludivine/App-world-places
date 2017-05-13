import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contacts } from '@ionic-native/contacts';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { PlacesPage } from '../pages/places/places';
import { LoginPage } from '../pages/login/login';
import { AddContactPage } from '../pages/add-contact/add-contact'
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { DetailsPlacePage } from '../pages/details-place/details-place';
import { LocatePage } from '../pages/locate/locate';
import { FavoritesPage } from '../pages/favorites/favorites';
import { SlidesPage } from '../pages/slides/slides';
import { ProfilePage } from '../pages/profile/profile';
import { MessageResetPasswordPage } from '../pages/message-reset-password/message-reset-password';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AuthService, UserService, PlacesService, FavoritesService } from './services';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../pages/tabs/tabs';

import * as firebase from 'firebase/app';

const myFirebaseConfig = {
    apiKey: "AIzaSyATE_DqMHFKC-u-uV1INPrEcHVW6y8k2Aw",
    authDomain: "test-4cff0.firebaseapp.com",
    databaseURL: "https://test-4cff0.firebaseio.com",
    storageBucket: "test-4cff0.appspot.com",
    messagingSenderId: "476274743436"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ResetPasswordPage,
    PlacesPage,
    AddContactPage,
    DetailsPlacePage,
    MessageResetPasswordPage,
    LocatePage,
    TabsPage,
    FavoritesPage,
    SlidesPage,
    ProfilePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    BrowserModule,
    AngularFireModule.initializeApp(myFirebaseConfig, 'my-app'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ResetPasswordPage,
    PlacesPage,
    AddContactPage,
    DetailsPlacePage,
    MessageResetPasswordPage,
    LocatePage,
    TabsPage,
    FavoritesPage,
    SlidesPage,
    ProfilePage
  ],
  providers: [
    {
    provide: ErrorHandler, 
    useClass: IonicErrorHandler
    }, 
    AuthService, 
    UserService,
    PlacesService,
    FavoritesService,
    Contacts,
    StatusBar,
    SplashScreen,
    Geolocation
  ]
})
export class AppModule {}

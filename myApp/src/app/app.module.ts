import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Contacts } from '@ionic-native/contacts';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { PlacesPage } from '../pages/places/places';
import { LoginPage } from '../pages/login/login';
import { AddContactPage } from '../pages/add-contact/add-contact'
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { DetailsPlacePage } from '../pages/details-place/details-place';
import { LocatePage } from '../pages/locate/locate';
import { MessageResetPasswordPage } from '../pages/message-reset-password/message-reset-password';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AuthService, UserService, PlacesService } from './services';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { TabsPage } from '../pages/tabs/tabs';

const myFirebaseConfig = {
    apiKey: "AIzaSyATE_DqMHFKC-u-uV1INPrEcHVW6y8k2Aw",
    authDomain: "test-4cff0.firebaseapp.com",
    databaseURL: "https://test-4cff0.firebaseio.com",
    storageBucket: "test-4cff0.appspot.com",
    messagingSenderId: "476274743436"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
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
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
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
    TabsPage
  ],
  providers: [
    {
    provide: ErrorHandler, 
    useClass: IonicErrorHandler
    }, 
    AuthService, 
    UserService,
    PlacesService,
    HTTP,
    Contacts
  ]
})
export class AppModule {}

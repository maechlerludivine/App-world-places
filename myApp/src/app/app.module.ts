import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AuthService, UserService } from './services';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

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
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    RegisterPage,
    ResetPasswordPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    RegisterPage,
    ResetPasswordPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService, UserService]
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/authService';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

const myFirebaseConfig = {
  apiKey: 'AIzaSyA2bxqatH4M6QW4MMF9QTjqO8HOr4eTV5I',
  authDomain: 'myapp-f3027.firebaseapp.com',
  databaseURL: 'https://myapp-f3027.firebaseio.com/',
  storageBucket: 'gs://myapp-f3027.appspot.com',
  messagingSenderId: 'AAAAcDvQKFM:APA91bELV1LJdkoQ_-76AUyE_I7xdns81s3sYy4YIA88Yw3lzCJe446ecXyHrGegmvsB0S_pTI8qcUX08Zw_roJzgEv5S3RUYQ80ksybHCG7pZotgn6epxJpdtFfyVpzh9viVogXk8HJ'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    RegisterPage
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
    RegisterPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService]
})
export class AppModule {}

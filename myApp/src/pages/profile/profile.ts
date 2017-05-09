import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { UserCredentials, UserProfile, Favorites } from '../../app/shared';
import { UserService, AuthService } from '../../app/services';
import { PlacesPage } from '../places/places';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
    user:any;

  constructor(
    public navCtrl: NavController,
    private authService: AuthService,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    private userService: UserService,

    ) {
  }

  getDataProfile() {
			this.userService.getProfil().subscribe(data => {
        console.log(this.user);
        this.user = data;			
    });
  }
}

import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { UserCredentials, UserProfile, Favorites, UserData } from '../../app/shared';
import { UserService, AuthService, FavoritesService} from '../../app/services';
import { PlacesPage } from '../places/places';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
    userData:UserData;
    userLastName:string;
    userFirstName: string;

  constructor(
    public navCtrl: NavController,
    private authService: AuthService,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    private userService: UserService,
    ) {

    let placeid = this.navParams.get('item');
    this.getProfileData();
  }

    getProfileData() {
      this.userService.getProfil().subscribe(data => {
      this.userData = data;
      this.userLastName = this.userData.lastname;
      this.userFirstName = this.userData.firstname;
      });
  }

  logout() {
      this.afAuth.auth.signOut();
      this.navCtrl.setRoot(HomePage);
  }
}

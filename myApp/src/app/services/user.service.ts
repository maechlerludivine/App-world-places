import { Injectable } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { UserProfile, UserData } from '../shared/user.model';

import * as firebase from 'firebase';
import 'firebase/auth';

@Injectable()
export class UserService {

    myprofile: FirebaseObjectObservable<any>;
    userData: UserData;
    constructor(
        private db: AngularFireDatabase,
        private afAuth: AngularFireAuth
    ) {
    }

    // Get user data

    getUserData() {
        console.log(this.userData);
        return this.userData;

    }

    // Set user data

    setUserData(userData: any) {
        this.userData = userData;
    }

    // Add user in database

    getProfil() {
        return this.myprofile = this.db.object('profil/' + this.getUserData().uid);
    }

    updateMyProfile(userProfile: UserProfile) {
        return this.db.object('profil/' + this.getUserData().uid).set(userProfile);
    }
}
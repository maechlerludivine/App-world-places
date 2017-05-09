import { Injectable } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { UserProfile } from '../shared/user.model';

import * as firebase from 'firebase';
import 'firebase/auth';

@Injectable()
export class UserService {

    myprofile: FirebaseObjectObservable<any>;
    userData: any;
    constructor(
        private db: AngularFireDatabase,
        private afAuth: AngularFireAuth
    ) {
        this.userData = null;
    }

    getUserData() {
        return this.userData;
    }

    setUserData(userData: any) {
        this.userData = userData;
    }

    getProfil() {
        return this.myprofile = this.db.object('profil/' + this.userData.uid);
    }

    updateMyProfile(userProfile: UserProfile) {
        return this.db.object('profil/' + this.getUserData().uid).set(userProfile);
    }
}
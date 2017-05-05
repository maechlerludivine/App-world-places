import { Injectable } from '@angular/core';

import { AngularFire, FirebaseObjectObservable, FirebaseAuthState } from 'angularfire2';

import { UserProfile } from '../shared/user.model';

@Injectable()
export class UserService {

    myprofile: FirebaseObjectObservable<any>;
    userData: FirebaseAuthState;
    constructor(private af: AngularFire) {
        this.userData = null;
    }

    getUserData() {
        return this.userData;
    }

    setUserData(userData: FirebaseAuthState) {
        this.userData = userData;
    }

    getProfil() {
        return this.myprofile = this.af.database.object('profil/' + this.getUserData().uid);
    }

    updateMyProfile(userProfile: UserProfile) {
        return this.af.database.object('profil/' + this.getUserData().uid).set(userProfile);
    }
}
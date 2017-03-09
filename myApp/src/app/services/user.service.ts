import { Injectable } from '@angular/core';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { UserProfile } from '../shared/user.model';

@Injectable()
export class UserService {

    myprofile: FirebaseObjectObservable<any>;
    constructor(private af: AngularFire) {

    }

    getProfil() {
        return this.myprofile = this.af.database.object('profil/' + this.af.auth.getAuth().uid);
    }

    updateMyProfile(userProfile: UserProfile) {        
        return this.af.database.object('profil/' + this.af.auth.getAuth().uid).set(userProfile);
    }
}
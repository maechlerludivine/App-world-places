import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule, AuthProviders, AuthMethods, AngularFire, FirebaseAuthState, FirebaseApp, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { UserProfile } from '../shared/user.model';
import { AuthService, UserService } from '../../app/services';



@Injectable()
export class FavoritesService {
    public onAuth: EventEmitter<FirebaseAuthState> = new EventEmitter();

    myfavorites: FirebaseObjectObservable<any>;
    constructor(
        private af: AngularFire,
        private userService: UserService
    ) {

    }

    getFavorites() {
        return this.myfavorites = this.af.database.object('favorites/' + this.userService.getUserData().uid);

    }

    updateMyFavorites(placeId: string) {
        return this.af.database.list('favorites/' + this.userService.getUserData().uid).push(placeId);
    }
}
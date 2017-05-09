import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';
import { UserProfile } from '../shared/user.model';
import { AuthService, UserService } from '../../app/services';



@Injectable()
export class FavoritesService {

    myfavorites: FirebaseListObservable<any>;
    constructor(
        private afAuth: AngularFireAuth,
        private db: AngularFireDatabase,
        private userService: UserService
    ) {

    }

    getFavorites() {
        return this.myfavorites = this.db.list('favorites/' + this.userService.getUserData().uid);
    }

    updateMyFavorites(placeId: string) {
    return this.db.list('favorites/' + this.userService.getUserData().uid).push(placeId);
    }

}
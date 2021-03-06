import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment'; import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';
import { UserProfile } from '../shared/user.model';
import { AuthService, UserService } from '../../app/services';



@Injectable()
export class FavoritesService {

    myfavorites: FirebaseListObservable<string[]>;
    constructor(
        private afAuth: AngularFireAuth,
        private db: AngularFireDatabase,
        private userService: UserService
    ) {
    }

    // Add favorites in the database

    getFavorites(): FirebaseListObservable<string[]> {
        return this.db.list('favorites/' + this.userService.getUserData().uid);
    }

    // Update the database

    updateMyFavorites(placeFavorite: any) {
        this.db.object('favorites/' + this.userService.getUserData().uid + '/' + placeFavorite.id).set(placeFavorite);
    }

}
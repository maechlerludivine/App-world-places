import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { UserCredentials } from '../shared/user.model';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Injectable()
export class AuthService {
  currentUser: UserCredentials;
  private authState: Observable<firebase.User>;
  public firebase: any;


  constructor(
    private afAuth: AngularFireAuth,
  ) {
    this.firebase = firebase;
  }

  // Create user with email and password

  create(createUserCredentials: UserCredentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(createUserCredentials.email, createUserCredentials.password);
  }

  // Login user with email and password

  login(credentials: UserCredentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }
  
  // Logout user

  logout(credentials: UserCredentials) {
    return this.afAuth.auth.signOut();
  }

  // Reset password

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }
}
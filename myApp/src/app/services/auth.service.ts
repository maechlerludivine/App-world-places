import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule, AuthProviders, AuthMethods, AngularFire, FirebaseAuthState, FirebaseApp } from 'angularfire2';
import 'rxjs/add/operator/map';

import { UserCredentials } from '../shared/user.model';

 
@Injectable()
export class AuthService {
  currentUser: UserCredentials;
  private authState: FirebaseAuthState;
  public onAuth: EventEmitter<FirebaseAuthState> = new EventEmitter();
  public firebase: any;

  constructor(private af: AngularFire, @Inject(FirebaseApp)firebase: any) {
    this.firebase = firebase;
    this.af.auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
      this.onAuth.emit(state);
    });
  }
 
  create(createUserCredentials: UserCredentials) {
    return this.af.auth.createUser({
			email: createUserCredentials.email,
			password: createUserCredentials.password,
		});
  }

  login(credentials: UserCredentials) {
    return this.af.auth.login({
			email: credentials.email,
			password: credentials.password,
		});
  }

  resetPassword(email: UserCredentials){
    return Observable.create(observer => {
      this.firebase.auth.sendPasswordResetEmail(email)
      .then((success) => {
          console.log('email sent', success);
          observer.next(success);
        }) 
        .catch((error) => {
          console.log('error sending email',error);
          observer.error(error);
        });
     });
  }
}
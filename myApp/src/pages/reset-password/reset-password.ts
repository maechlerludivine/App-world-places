import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { UserService, AuthService } from '../../app/services';
import { HomePage } from '../home/home';
import { MessageResetPasswordPage } from '../message-reset-password/message-reset-password';

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html'
})
export class ResetPasswordPage {
  resetPasswordForm: FormGroup;
  email: AbstractControl;
  message:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private authService: AuthService
    ) {

    // reset password
    this.resetPasswordForm = this.fb.group({
      'email': ['', 
        Validators.compose([
          Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
          ])
        ]
    });

    this.email = this.resetPasswordForm.controls['email'];
  }

  // Error reset password

  submit(): void {
    this.message = "";
    if (this.resetPasswordForm.valid) {
      this.authService.resetPassword(this.email.value).then(registerData => {
        this.navCtrl.setRoot(MessageResetPasswordPage, { messagePassword: true });
      }, registerError => {
        if (registerError['code'] === 'auth/user-not-found') {
          this.message = "Utilisateur inconnu";
        } else if (registerError['code'] === 'auth/invalid-email') {
          this.message = "Email invalide";
        } else if (registerError['code'] === 'auth/operation-not-allowed') {
          this.message = "Erreur";
        }
      }); 
    } // end if
  }
}
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { UserService, AuthService } from '../../app/services';
import { HomePage } from '../home/home';
 
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html'
})
export class ResetPasswordPage {
  resetPasswordForm: FormGroup;
  email: AbstractControl;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private authService: AuthService)
  {
    this.resetPasswordForm = this.fb.group({  
          'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])]
      });
  
      this.email = this.resetPasswordForm.controls['email'];     
  }
 
  submit(): void { 
    if(this.resetPasswordForm.valid) {
        this.authService.resetPassword(this.email.value).subscribe(registerData => {
            alert('Password recovery link is sent.');
            this.navCtrl.setRoot(HomePage);
        }, registerError => {
          console.log(registerError);
          if (registerError.code === 'auth/user-not-found')
          {
            alert(registerError.message);
          }
      });
    }
  }
}
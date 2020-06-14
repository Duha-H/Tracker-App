import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { AuthWrapperService } from '../auth-wrapper.service';

@Component({
  selector: 'app-account-recovery',
  templateUrl: './account-recovery.component.html',
  styleUrls: ['./account-recovery.component.css']
})
export class AccountRecoveryComponent implements OnInit {

  forgotPass = false;
  error = '';
  email = '';
  state: 'forgotPassword' | 'newPassword' | 'resetSuccessful' = 'forgotPassword';

  constructor(private router: Router, private authWrapper: AuthWrapperService) { }

  ngOnInit(): void {
  }

  toggleView(state: boolean) {
    this.forgotPass = state;
  }

  async forgotPassword(email: string) {
    this.email = email;
    // if (this.email.length === 0) {
    //   this.error = 'Email cannot be empty';
    //   return;
    // }

    // Auth.forgotPassword(this.email)
    //   .then(data => {
    //     console.log(data);
    //     this.forgotPass = false;
    //     this.state = 'newPassword';
    //   })
    //   .catch(error => {
    //     // console.log(error);
    //     if (error.code === 'UserNotFoundException') {
    //       this.error = 'No user account found with the specified email address.\nMaybe double-check the entered email?';
    //     } else {
    //       this.error = error.message;
    //       console.log(error);
    //     }
    //   });
    const response = await this.authWrapper.forgotPassword(this.email);
    if (response.successful) {
      this.forgotPass = false;
      this.state = 'newPassword';
    } else {
      this.error = response.message;
    }
  }

  async forgotPasswordSubmit(verificationData: {[key: string]: string}) {
    console.log(verificationData);
    // if (verificationData.code.length === 0) {
    //   this.error = 'No verification code specified.\nEnter the verification code sent to your account email.';
    //   return;
    // } else if (verificationData.newPassword.length === 0) {
    //   this.error = 'New password was not specified';
    //   return;
    // } else if (verificationData.confirmedPassword.length === 0) {
    //   this.error = 'New password was not re-entered.\nRe-enter new password to confirm it.';
    //   return;
    // } else if (verificationData.newPassword !== verificationData.confirmedPassword) {
    //   this.error = 'Looks like your passwords don\'t match.\nRe-enter to make sure they match.';
    //   return;
    // }

    // Auth.forgotPasswordSubmit(this.email, verificationData.code, verificationData.newPassword)
    //   .then(data => {
    //     console.log(data);
    //     this.state = 'resetSuccessful';
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     this.error = error.message;
    //   });
    const response = await this.authWrapper.forgotPasswordSubmit(
      this.email,
      verificationData.code,
      verificationData.newPassword,
      verificationData.confirmedPassword
    );
    if (response.successful) {
      this.state = 'resetSuccessful';
    } else {
      this.error = response.message;
    }

  }

}

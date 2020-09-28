import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthWrapperService } from 'src/app/auth/auth-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router, private authWrapper: AuthWrapperService) { }

  async canActivate(): Promise<boolean> {
    const authedUser = await this.authWrapper.currentAuthenticatedUser();
    if (authedUser || this.authWrapper.authState.signedIn) {
      console.log('user currently authenticated');
      return true;
    } else {
      console.log('user NOT authenticated');
      this.router.navigate(['']);
      return false;
    }
  }
}

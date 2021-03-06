import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthOAuth2Token, NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private nbAuthService: NbAuthService,
    private router: Router
  ) {
  }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(res => {
      this.nbAuthService.onTokenChange()
        .subscribe((token: NbAuthOAuth2Token) => {
          console.log(token, token.isValid());
          if (token && token.isValid()) {
            res(true)
          } else {
            this.router.navigateByUrl('auth');
            res(false);
          }
        });
    });
  }
}

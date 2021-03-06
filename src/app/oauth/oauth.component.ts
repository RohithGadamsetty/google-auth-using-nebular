import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthOAuth2Token, NbAuthResult, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss']
})
export class OauthComponent implements OnInit {

  constructor(
    private nbAuthService: NbAuthService,
    private router: Router
  ) {
    this.nbAuthService.onTokenChange()
      .subscribe((token: NbAuthOAuth2Token) => {
        console.log(token.getPayload());
        if (token && token.isValid()) {
          this.router.navigateByUrl('profile');
          console.log(token.getPayload());
        }
      });
  }

  login() {
    this.nbAuthService.authenticate('google')
      .subscribe((authResult: NbAuthResult) => {
        console.log('loginAuth', authResult);
      });
  }

  ngOnInit() { }

}
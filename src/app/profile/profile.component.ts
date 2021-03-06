import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthOAuth2Token, NbAuthResult, NbAuthService } from '@nebular/auth';
import { OauthService } from '../oauth/oauth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  userProfileInfo: any;
  constructor(
    private nbAuthService: NbAuthService,
    private oauthService: OauthService,
    private router: Router) {
    this.getAccessToken();
  }

  logout() {
    this.nbAuthService.logout('google')
      .subscribe((authResult: NbAuthResult) => {
        console.log('logoutAuth', authResult);
        this.router.navigateByUrl('auth');
      });
  }

  getAccessToken() {
    this.nbAuthService.onTokenChange()
      .subscribe((token: NbAuthOAuth2Token) => {
        if (token && token.isValid()) {
          console.log(token.getPayload());
          this.getUserProfileInfo(token.getPayload().access_token);
        }
      });
  }

  getUserProfileInfo(access_token) {
    this.oauthService.getUserProfileInfo(access_token).subscribe(
      UserProfileResponse => {
        console.log(UserProfileResponse);
        this.userProfileInfo = UserProfileResponse;
      }
    )
  }

  ngOnInit() { }
}

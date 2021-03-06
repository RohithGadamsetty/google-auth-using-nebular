import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthResult, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  userProfileInfo: any;
  constructor(
    private authService: NbAuthService,
    private router: Router) {
    this.authService.authenticate('google')
      .subscribe((authResult: NbAuthResult) => {
        if (authResult.isSuccess()) {
          this.router.navigateByUrl('/profile');
        }
      });
  }

  ngOnInit() {
  }

}

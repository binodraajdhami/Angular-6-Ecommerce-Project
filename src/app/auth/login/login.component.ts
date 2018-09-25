import { Component } from '@angular/core';
import { User, AuthService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { MsgService } from './../../shared/services/msg.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user;
  public queryData: any
  // public errUsername: string;
  // public errPass: string;

  constructor(
    public activeRoute: ActivatedRoute,
    public msgService: MsgService,
    public authService: AuthService
  ) {
    this.user = new User({ age: 344, phone: 444, email: 'sdlfj@gmail.com' });
    console.log('this.user here', this.user);

    this.queryData = activeRoute.queryParams.subscribe((data) => {
      console.log("data", data);
    })

  }


  loginNow() {
    // this.msgService.showSuccess('done welldone')
    this.authService.login(this.user)
      .then(
        (data: User) => {
          console.log('data', data);
          this.msgService.showSuccess(data.username)
        })
      .catch((err) => {
        console.log('error here',err);
        this.msgService.showError(err);
      })
  }

}

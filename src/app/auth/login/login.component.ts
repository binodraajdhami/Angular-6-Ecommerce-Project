import { Component } from '@angular/core';
import { User } from './../services/user.class';
import { ActivatedRoute } from '@angular/router';

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
    public activeRoute: ActivatedRoute
  ) {
    this.user = new User({ age: 344, phone: 444, email: 'sdlfj@gmail.com' });
    console.log('this.user here', this.user);

    this.queryData = activeRoute.queryParams.subscribe((data) => {
      console.log("data", data);
    })

  }


  loginNow() {
    // if (!this.user.username) {
    //   this.errUsername = 'user is missing';
    // }
    // if (!this.user.password) {
    //   this.errPass = 'password is missing';
    // }
    console.log('this iuser', this.user);
  }

}

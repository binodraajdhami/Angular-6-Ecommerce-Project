import { Component } from '@angular/core';
import { User } from './../services/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user;
  // public errUsername: string;
  // public errPass: string;

  constructor() {
    this.user = new User({ age: 344, phone: 444, email: 'sdlfj@gmail.com' });
    console.log('this.user here', this.user);
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

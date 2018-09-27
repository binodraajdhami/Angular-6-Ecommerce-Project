import { Component } from '@angular/core';
import { User, AuthService } from '../services/user.service';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { MsgService } from './../../shared/services/msg.service';
import { Observable } from 'rxjs';


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
    public authService: AuthService,
    public router: Router
  ) {
    this.user = new User({ age: 344, phone: 444, email: 'sdlfj@gmail.com' });

    this.queryData = activeRoute.queryParams.subscribe((data) => {
    })

  }
  // getbigbangtheroy(name) {
  //   return new Observable((observer) => {
  //     if (!name) {
  //       observer.error('no episode name');
  //       return;
  //     }
  //     let i = 1;
  //     setInterval(() => {
  //       observer.next('episode ' + i)
  //       i++;

  //     }, 2000)
  //   })
  // }

  // callForNotePromise(note) {
  //   return new Promise((resolve, reject) => {
  //     setInterval(() => {
  //       console.log('interval repeat');
  //       resolve({
  //         note: note
  //       })
  //     }, 2000)
  //   })
  // }

  loginNow() {
    this.authService.login(this.user)
      .subscribe(
        (data: any) => {
          // console.log('data', data);
          this.msgService.showSuccess('welcome ' + data.user.username);
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          this.router.navigate(['/user/dashboard'])
        },
        (err: any) => {
          console.log('err', err);
          this.msgService.showError(err);
        })



  }

}

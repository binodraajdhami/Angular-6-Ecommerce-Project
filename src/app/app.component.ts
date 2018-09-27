import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grou 6';
  public loggedInUser;
  constructor(
    public router: Router,
  ) {
    this.loggedInUser = JSON.parse(localStorage.getItem('user'));
    this.router.events.subscribe((val: NavigationStart) => {
      if (val.url) {
        let url = val.url.split('/')[1];
        if (url) {
          if (url !== 'auth') {
            if (!localStorage.getItem('token')) {
              this.router.navigate(['auth/login']);
            };
          }
        }
      }
    });
  }

  isLoggedIn() {
    return localStorage.getItem('token') ? true : false;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login'])
  }

}

// it id defined as component by @component decorator
// meta data insde @component decorator

// selector selector is an new html attribute that will be used in html file and it will hold the overall component

// template url holds template file url
// styleUrls holds array of styles
import { Component, OnInit } from '@angular/core';
import { User } from './../services/user.class';
import { Router } from '@angular/router';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public user;
    public submitting: boolean = false;
    constructor(public router: Router) {
        this.user = new User({});
    }

    ngOnInit() {
    }


    register() {
        this.submitting = true;

        setTimeout(() => {
            this.router.navigate(['/auth/login'], {
                queryParams: {
                    name: 'ramesh',
                    address: 'kapan'
                }
            });
            this.submitting = false;
        }, 4000);
    }

}

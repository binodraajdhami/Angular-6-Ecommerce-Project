import { Component, OnInit } from '@angular/core';
import { User } from '../services/user.class';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public user;
    public submitting: boolean = false;
    constructor() {
        this.user = new User({});
    }

    ngOnInit() {
    }


    register() {
        this.submitting = true;
        setTimeout(() => {
            this.submitting = false;
        }, 4000);
    }

}

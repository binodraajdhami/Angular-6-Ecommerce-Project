import { Component, OnInit } from '@angular/core';
import { User, AuthService } from '../services/user.service';
import { Router } from '@angular/router';
import { MsgService } from '../../shared/services/msg.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public user;
    public submitting: boolean = false;
    constructor(
        public router: Router,
        private authService: AuthService,
        private msgService: MsgService
    ) {
        this.user = new User({});
    }

    ngOnInit() {
    }


    register() {
        this.submitting = true;
        this.authService.register(this.user).subscribe(
            (data: any) => {
                this.router.navigate(['/auth/login'])
                this.msgService.showSuccess('user registration successfull Please check your email');
                this.submitting = false;
            },
            err => {
                this.submitting = false;
                this.msgService.showError(err);
            }
        )

    }

}

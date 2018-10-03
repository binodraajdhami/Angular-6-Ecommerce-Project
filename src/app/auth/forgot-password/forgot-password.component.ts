import { Component, OnInit } from '@angular/core';
import { MsgService } from '../../shared/services/msg.service';
import { Router } from '@angular/router';
import { AuthService, User } from '../services/user.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
    submitting: boolean = false;
    user;
    constructor(
        public msgService: MsgService,
        public router: Router,
        public authService: AuthService
    ) { }

    ngOnInit() {
        this.user = new User({});
    }

    forgot() {
        this.submitting = true;
        this.authService.forgotPassword(this.user).subscribe(
            data => {
                this.submitting = false;
                this.router.navigate(['/auth/login']);
                this.msgService.showSuccess("Password reset link sent to your email please check your email");
            }, err => {
                this.submitting = false;
                this.msgService.showError(err);
                this.user = new User({});
            }
        )
    }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MsgService } from '../../shared/services/msg.service';
import { AuthService, User } from '../services/user.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public token: string;
  public user;
  public submitting: boolean = false;
  constructor(
    public active: ActivatedRoute,
    public router: Router,
    public msgService: MsgService,
    public authService: AuthService
  ) {
    this.user = new User({});
  }

  ngOnInit() {
    this.token = this.active.snapshot.params.token;
  }
  reset() {
    this.submitting = true;
    this.user.token = this.token;
    this.authService.reset(this.user).subscribe(
      data => {
        this.submitting = false;

        this.msgService.showSuccess('password reset successfull please login');
        this.router.navigate(['/auth/login']);
      },
      err => {
        this.submitting = false;

        this.msgService.showError(err);
      }
    )
  }

}


import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
const authRoutesArray: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'reset/:token',
        component: ResetPasswordComponent
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(authRoutesArray)
    ],
    exports: [RouterModule],
})
export class AuthRoutingModule {

}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LoginComponent],
  // exports: []
})
export class AppModule { }

// meta data is object that define class
// meta data is used inside decorator
// 
// module's meta data
// declarations it is array that holds all the Component,directives,pipes that are used in a module

// imports  also holds array that will have all the internal modules and thirdparty modules with angularjs inbuilt module
// 
// providers providers will have arrays of services 

// bootstrap first landing componet is used and it is used only in root module

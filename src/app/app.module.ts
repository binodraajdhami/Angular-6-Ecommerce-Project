// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    ProductModule,
    UserModule,
    SharedModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
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

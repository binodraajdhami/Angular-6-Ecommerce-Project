import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],
  declarations: [DashbordComponent]
})
export class UserModule { }

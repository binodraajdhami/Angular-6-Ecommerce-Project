import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user.routing';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    FormsModule
  ],
  declarations: [DashbordComponent, ChatComponent]
})
export class UserModule { }

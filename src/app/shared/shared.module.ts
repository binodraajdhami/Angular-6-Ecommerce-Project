import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MsgService } from './services/msg.service';
import { BaseService } from './services/base.service';
import { LoaderComponent } from './loader/loader.component';
import { SocketService } from './services/socket.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageNotFoundComponent, LoaderComponent],
  exports: [PageNotFoundComponent, LoaderComponent],
  providers: [MsgService, BaseService, SocketService]
})
export class SharedModule { }

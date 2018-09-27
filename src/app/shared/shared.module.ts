import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MsgService } from './services/msg.service';
import { BaseService } from './services/base.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
  providers: [MsgService, BaseService]
})
export class SharedModule { }

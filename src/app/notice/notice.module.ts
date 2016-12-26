import { NgModule }       from '@angular/core';
import { CommonModule }       from '@angular/common';

import { NoticeRoutingModule } from './notice-route.module';
import { NoticeComponent } from './notice.component';

@NgModule({
  imports: [
      NoticeRoutingModule,
      CommonModule
  ],
  declarations: [
      NoticeComponent
  ],
  exports: [
      NoticeComponent
    ],
  providers: [

  ]
})
export class NoticeModule {}

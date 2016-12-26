import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoticeComponent } from './notice.component';

const noticeRoutes: Routes = [
  {
    path: 'notice/:type',
    component: NoticeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(noticeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NoticeRoutingModule { }

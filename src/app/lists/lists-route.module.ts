import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListsComponent } from './lists.component';
import { ListsViewComponent } from './lists-view/lists-view.component';
import { DetailComponent } from './detail/detail.component';

const listsCenterRoutes: Routes = [
  {
    path: 'lists',
    component: ListsComponent,
    children: [
      {
        path: '',
        redirectTo: 'index'
      }, {
        path: ':type',
        component: ListsViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(listsCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ListsCenterRoutingModule { }

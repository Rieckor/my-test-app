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
        component: ListsViewComponent
      }, {
        path: 'index',
        component: ListsViewComponent
      }, {
        path: 'group',
        component: ListsViewComponent
      }, {
        path: 'precision',
        component: ListsViewComponent
      }, {
        path: 'detail/:id',
        component: DetailComponent
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

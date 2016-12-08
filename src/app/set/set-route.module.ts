import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SetComponent } from './set.component';
import { BaseComponent } from './base/base.component';
import { PrecisionComponent } from './Precision/Precision.component';
import { IndexComponent } from './Index/Index.component';

const setRoutes: Routes = [
  {
    path: '',
    component: SetComponent,
    children: [
        {
          path: 'index',
          component: IndexComponent
        }, {
          path: 'base',
          component: BaseComponent
        }, {
          path: 'precision',
          component: PrecisionComponent
        }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(setRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SetRouteModule {}

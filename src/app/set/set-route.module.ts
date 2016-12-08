import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SetComponent } from './set.component';

const setRoutes: Routes = [
  {
    path: '',
    component: SetComponent,
    children: [
        {
          path: 'index',
          component: SetComponent
        }, {
          path: 'step2',
          component: SetComponent
        }, {
          path: 'step3',
          component: SetComponent
        }, {
          path: 'step4',
          component: SetComponent
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

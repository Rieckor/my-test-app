import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SetComponent } from './set.component';
import { BaseComponent } from './base/base.component';
import { TextComponent } from './base/text.component';
import { SelectComponent } from './base/select.component';
import { PrecisionComponent } from './Precision/Precision.component';
import { IndexComponent } from './Index/Index.component';
import { BlankComponent } from './index/Blank.component';

const setRoutes: Routes = [
  {
    path: '',
    component: SetComponent,
    children: [
        {
          path: 'index',
          component: IndexComponent,
          children: [
            {
              path: '',
              component: BlankComponent
            },{
              path: 'precision',
              component: PrecisionComponent
            }
          ]
        }, {
          path: 'base',
          component: BaseComponent,
        }, {
          path: 'base/text',
          component: TextComponent,
        }, {
          path: 'base/select',
          component: SelectComponent,
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

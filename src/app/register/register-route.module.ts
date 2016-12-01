import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register.component';
import { FirstStepComponent } from './step/first-step/first-step.component';
import { SecondStepComponent } from './step/Second-step/second-step.component';
import { ThirdStepComponent } from './step/Third-step/Third-step.component';
import { FourStepComponent } from './step/Four-step/Four-step.component';

const regRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
        {
          path: 'step1',
          component: FirstStepComponent
        }, {
          path: 'step2',
          component: SecondStepComponent
        }, {
          path: 'step3',
          component: ThirdStepComponent
        }, {
          path: 'step4',
          component: FourStepComponent
        }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(regRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterRouteModule {}

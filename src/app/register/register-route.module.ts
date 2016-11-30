import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register.component';

const regRoutes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    children: [

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

import { NgModule }       from '@angular/core';
import { SharedModule } from '../share/shared.module';

import { RegisterComponent } from './register.component';
import { FirstStepComponent } from './step/first-step/first-step.component';
import { SecondStepComponent } from './step/Second-step/second-step.component';
import { ThirdStepComponent } from './step/Third-step/Third-step.component';
import { FourStepComponent } from './step/Four-step/Four-step.component';
import { RegisterRouteModule } from './register-route.module';

@NgModule({
  imports: [
    SharedModule,
    RegisterRouteModule
  ],
  declarations: [
    RegisterComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    FourStepComponent
  ],
  exports: [
    RegisterComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    FourStepComponent
    ],
  providers: [

  ]
})
export class RegisterModule { }


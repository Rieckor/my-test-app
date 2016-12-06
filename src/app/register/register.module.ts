import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RegisterComponent } from './register.component';
import { FirstStepComponent } from './step/first-step/first-step.component';
import { SecondStepComponent } from './step/Second-step/second-step.component';
import { ThirdStepComponent } from './step/Third-step/Third-step.component';
import { FourStepComponent } from './step/Four-step/Four-step.component';
import { RegisterRouteModule } from './register-route.module';
import { UploadAvatarComponent } from '../share/upload-avatar.component';
import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RegisterRouteModule
  ],
  declarations: [
    RegisterComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    FourStepComponent,
    UploadAvatarComponent,
    FileSelectDirective
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


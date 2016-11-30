import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RegisterComponent } from './register.component';
import { RegisterRouteModule } from './register-route.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RegisterRouteModule
  ],
  declarations: [
    RegisterComponent
  ],
  exports: [
    RegisterComponent
    ],
  providers: [

  ]
})
export class RegisterModule {}

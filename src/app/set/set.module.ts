import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { SetComponent } from './set.component';
import { SetRouteModule } from './set-route.module';
import { BaseComponent } from './base/base.component';
import { PrecisionComponent } from './Precision/Precision.component';
import { IndexComponent } from './Index/Index.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SetRouteModule
  ],
  declarations: [
    SetComponent,
    BaseComponent,
    PrecisionComponent,
    IndexComponent
  ],
  exports: [
    BaseComponent,
    PrecisionComponent,
    IndexComponent,
    SetComponent
    ],
  providers: [

  ]
})
export class SetModule { }


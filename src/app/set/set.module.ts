import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { SetComponent } from './set.component';
import { SetRouteModule } from './set-route.module';
import { BaseComponent } from './base/base.component';
import { PrecisionComponent } from './Precision/Precision.component';
import { IndexComponent } from './Index/Index.component';
import { TextComponent } from './base/text.component';
import { SelectComponent } from './base/select.component';

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
    IndexComponent,
    TextComponent,
    SelectComponent
  ],
  exports: [
    BaseComponent,
    PrecisionComponent,
    IndexComponent,
    SetComponent,
    TextComponent,
    SelectComponent
    ],
  providers: [

  ]
})
export class SetModule { }


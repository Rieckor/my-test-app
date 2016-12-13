import { NgModule }       from '@angular/core';
import { SharedModule } from '../share/shared.module';

import { SetComponent } from './set.component';
import { SetRouteModule } from './set-route.module';
import { BaseComponent } from './base/base.component';
import { PrecisionComponent } from './Precision/Precision.component';
import { IndexComponent } from './Index/Index.component';
import { TextComponent } from './base/text.component';
import { SelectComponent } from './base/select.component';


@NgModule({
  imports: [
    SharedModule,
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


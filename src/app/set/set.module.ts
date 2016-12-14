import { NgModule }       from '@angular/core';
import { SharedModule } from '../share/shared.module';

import { SetComponent } from './set.component';
import { SetRouteModule } from './set-route.module';
import { BaseComponent } from './base/base.component';
import { PrecisionComponent } from './Precision/Precision.component';
import { IndexComponent } from './Index/Index.component';
import { TextComponent } from './base/text.component';
import { SelectComponent } from './base/select.component';
import { BlankComponent } from './index/Blank.component';

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
    SelectComponent,
    BlankComponent
  ],
  exports: [
    BaseComponent,
    PrecisionComponent,
    IndexComponent,
    SetComponent,
    TextComponent,
    SelectComponent,
    BlankComponent
    ],
  providers: [

  ]
})
export class SetModule { }


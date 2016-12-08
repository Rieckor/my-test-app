import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { SetComponent } from './set.component';
import { UploadAvatarComponent } from '../share/upload-avatar.component';
import { FileSelectDirective } from 'ng2-file-upload';
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
    IndexComponent,
    UploadAvatarComponent,
    FileSelectDirective
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


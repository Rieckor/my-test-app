import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { SetComponent } from './set.component';
import { UploadAvatarComponent } from '../share/upload-avatar.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { SetRouteModule } from './set-route.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SetRouteModule
  ],
  declarations: [
    SetComponent,
    UploadAvatarComponent,
    FileSelectDirective
  ],
  exports: [
    SetComponent
    ],
  providers: [

  ]
})
export class SetModule { }


import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { UploadAvatarComponent } from './upload-avatar.component';
import { FileSelectDirective } from 'ng2-file-upload';

/* 管道 */
import { MainPipe } from '../pipe/main-pipe.module';

@NgModule({
  imports:      [ CommonModule, MainPipe, MaterialModule.forRoot() ],
  declarations: [ UploadAvatarComponent, FileSelectDirective ],
  providers: [],
  exports:      [CommonModule, FormsModule, MaterialModule, MainPipe, FileSelectDirective, UploadAvatarComponent ]
})
export class SharedModule { }

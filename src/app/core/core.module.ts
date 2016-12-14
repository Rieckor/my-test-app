import {
   NgModule,
  Optional, SkipSelf }       from '@angular/core';
import { CommonModule }      from '@angular/common';
import { HttpModule } from '@angular/http';

/**
 * 共享用户数据服务
 */
import { SharedData } from './share-data.service';
import { SetUserService } from './get-user-http.service';

@NgModule({
  imports:      [
    CommonModule,
    HttpModule
  ],
  declarations: [  ],
  exports:      [  ],
  providers:    [SharedData, SetUserService,

   ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
  if (parentModule) {
    throw new Error(
      'CoreModule is already loaded. Import it in the AppModule only');
  }
}
}

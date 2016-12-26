import { NgModule }       from '@angular/core';

import { AdminRoutingModule } from './admin-route.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
      AdminRoutingModule
  ],
  declarations: [
      AdminComponent
  ],
  exports: [
      AdminComponent
    ],
  providers: [

  ]
})
export class AdminModule {}

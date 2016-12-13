import { NgModule }       from '@angular/core';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { SharedModule } from '../share/shared.module';
import { ListsComponent } from './lists.component';
import { ListsViewComponent } from './lists-view/lists-view.component';
import { DetailComponent } from './detail/detail.component';

import { ListsCenterRoutingModule } from './lists-route.module';

@NgModule({
  imports: [
    ListsCenterRoutingModule,
    InfiniteScrollModule,
    SharedModule
  ],
  declarations: [
    ListsViewComponent,
    ListsComponent,
    DetailComponent
  ],
  exports: [
    ListsComponent,
    DetailComponent
    ],
  providers: [

  ]
})
export class ListsModule {}

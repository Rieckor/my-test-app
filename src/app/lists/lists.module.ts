import { NgModule }       from '@angular/core';
// import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { MaterialModule } from '@angular/material';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { ListsComponent } from './lists.component';
import { ListsViewComponent } from './lists-view/lists-view.component';
import { DetailComponent } from './detail/detail.component';

import { ListsCenterRoutingModule } from './lists-route.module';

@NgModule({
  imports: [
    CommonModule,
 // FormsModule,
    ListsCenterRoutingModule,
    InfiniteScrollModule,
    MaterialModule
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

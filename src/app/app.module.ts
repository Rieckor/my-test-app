import { MaterialModule } from '@angular/material';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { ListsComponent } from './lists/lists.component';
import { RegeditComponent } from './regedit/regedit.component';
import { SetComponent } from './set/set.component';
import { ListsViewComponent } from './lists/lists-view/lists-view.component';


@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    RegeditComponent,
    SetComponent,
    ListsViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    InfiniteScrollModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

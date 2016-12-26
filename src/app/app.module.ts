import './rxjs-operators';

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { CoreModule }       from './core/core.module';
import { NoticeModule }       from './notice/notice.module';

/* Routing Module */
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NoticeModule
  ],
  providers: [
    Title
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

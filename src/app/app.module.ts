import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { CoreModule }       from './core/core.module';
import { ListsModule } from './lists/lists.module';

/* Routing Module */
import { AppRoutingModule }     from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListsModule,
    CoreModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

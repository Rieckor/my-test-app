import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
  { path: '', redirectTo: '/Lists', pathMatch: 'full' },
  { path: 'Lists',  component: ListsComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
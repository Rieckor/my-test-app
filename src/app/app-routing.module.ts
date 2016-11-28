import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegeditComponent } from './regedit/regedit.component';
import { SetComponent } from './set/set.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  {
    path: 'lists',
    loadChildren: 'app/lists/lists.module'
  },
  {
    path: 'regedit',
    component: RegeditComponent
  },
  {
    path: 'set',
    component: SetComponent
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
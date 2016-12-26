import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/lists/index',
    pathMatch: 'full'
  }, {
    path: 'register',
    loadChildren: 'app/register/register.module#RegisterModule',
  }, {
    path: 'set',
    loadChildren: 'app/set/set.module#SetModule',
  }, {
    path: 'lists',
    loadChildren: 'app/lists/lists.module#ListsModule',
  }, {
    path: 'notice',
    loadChildren: 'app/notice/notice.module#NoticeModule',
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

// Add the RxJS Observable operators.
import '../rxjs-operators';

import { Component, ViewChild } from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {MdMenuTrigger} from '@angular/material';

@Component({
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [MdIconRegistry]
})
 
export class ListsComponent {
  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
  navItems = [
    {name: '人脉列表', route: 'index'},
    {name: '群落列表', route: 'group'},
    {name: '精准列表', route: 'precision'}
  ];
  someMethod() {
    this.trigger.openMenu();
  }
}



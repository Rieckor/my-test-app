// Add the RxJS Observable operators.
import './rxjs-operators';

import { Component } from '@angular/core';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MdIconRegistry]

})
export class AppComponent {
  navItems = [
    {name: 'Button', route: 'button'},
    {name: 'Button Toggle', route: 'button-toggle'},
    {name: 'Card', route: 'card'},
    {name: 'Checkbox', route: 'checkbox'},
    {name: 'Dialog', route: 'dialog'},
    {name: 'Gestures', route: 'gestures'},
    {name: 'Grid List', route: 'grid-list'}
  ];
}

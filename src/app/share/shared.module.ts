import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { ListService } from '../lists/lists-view/lists.service';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ ],
  exports:      [CommonModule, FormsModule ],
  providers: [ListService]
})
export class SharedModule { }

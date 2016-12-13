import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {GetSexPipe} from './sex.pipe';
import {GetIndustryPipe} from './industry.pipe';

@NgModule({
  declarations: [ GetSexPipe, GetIndustryPipe],
  imports: [ CommonModule],
  exports: [ GetSexPipe, GetIndustryPipe]
})

export class MainPipe { }

import { Component, OnInit } from '@angular/core';
import { SharedData } from '../../core/share-data.service';
import { User } from '../../share/user';
import {UpdateService} from '../../share/update-http.service';
import {Field} from '../../share/field';

@Component({
    template: `
<div >
<div class="weui-cell weui-cell_select" style="padding: 1rem;" >
   <div class="weui-cell__bd" style="border-bottom: 1px solid #3FCA3F;">
      <select #select class="weui-select" name="industry" ng-model="industry">
        <option *ngFor = "let industry of user?.industrys" 
        [selected]="user?.industry === industry.id?true:null"  value="{{industry?.id}}">{{industry?.name}}</option>
      </select>
    </div>
 </div>
<a class="weui-btn weui-btn_mini weui-btn_primary" (click)="update(select.value)" style="margin-left: 80%;">保存</a>
</div>
  `,
    providers: [UpdateService]
})
export class SelectComponent implements OnInit {
    user: User;
    data: Field;
    constructor(
        private sharedata: SharedData,
        private savefield: UpdateService
    ) { }

    ngOnInit() {
    this.sharedata.getData().subscribe(
      user => {
        if (user != null) {
           this.user = user;
        }
      }
      );
    }

   update(event) {
    this.data = {'field': 'industry', 'type': 'select', 'value': event };
    this.savefield.UpdateField(this.data)
    .subscribe(
      res => {
        this.user.industry = event;
        this.sharedata.setData(this.user);
        history.go(-1);
      }
    );
  }

}

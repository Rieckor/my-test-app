import { Component, OnInit } from '@angular/core';
import { SharedData } from '../../core/share-data.service';
import { User } from '../../share/user';

@Component({
    template: `
<div >
<div class="weui-cell weui-cell_select" style="padding: 1rem;" >
   <div class="weui-cell__bd" style="border-bottom: 1px solid #3FCA3F;">
      <select class="weui-select" name="industry" ng-model="industry">
        <option *ngFor = "let industry of user?.industrys" value="industry.id">{{industry?.name}}</option>
      </select>
    </div>
 </div>
	<a class="weui-btn weui-btn_mini weui-btn_primary" ng-click="saveindusty()" style="margin-left: 80%;">保存</a>
</div>
  `,
})
export class SelectComponent implements OnInit {
    user: User;
    constructor(
        private sharedata: SharedData
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

}

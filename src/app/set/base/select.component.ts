import { Component, OnInit } from '@angular/core';

@Component({
    template: `
<div >
<div class="weui-cell weui-cell_select" style="padding: 1rem;" >
   <div class="weui-cell__bd" style="border-bottom: 1px solid #3FCA3F;">
      <select class="weui-select" name="industry" ng-model="industry">
		<option value="0">请选择行业</option>
        <option value="1">2</option>
      </select>
    </div>
 </div>
	<a class="weui-btn weui-btn_mini weui-btn_primary" ng-click="saveindusty()" style="margin-left: 80%;">保存</a>
</div>
  `,
})
export class SelectComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}

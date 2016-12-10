import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="weui-cell" style="padding: 1rem;" >
    <div class="weui-cell__bd" style="display: flex;border-bottom: 1px solid #3FCA3F;">
        <input class="weui-input" placeholder="请输入文本" ng-model="text" ng-change="checkText()" type="text">
        <div class="weui-input-counter" style="color: #A5A5A5;">
            <span>11</span>/50
        </div>
    </div>
</div>
<button type="submit" class="weui-btn weui-btn_mini weui-btn_primary"  style="margin-left: 80%;">保存</button>

  `,
})
export class TextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

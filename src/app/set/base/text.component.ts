import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="weui-cell" style="padding: 1rem;" >
    <div class="weui-cell__bd" style="display: flex;border-bottom: 1px solid #3FCA3F;">
        <input #text class="weui-input" (keyup)="characterCount(text)" placeholder="请输入文本" maxlength="50"  type="text">
        <div class="weui-input-counter" style="color: #A5A5A5;">
            <span>{{cnt}}</span>/50
        </div>
    </div>
</div>
<button type="submit" class="weui-btn weui-btn_mini weui-btn_primary"  style="margin-left: 80%;">保存</button>

  `,
})
export class TextComponent implements OnInit {
  cnt =  0;
  constructor() { }

  ngOnInit() {
  }
  characterCount(event): number {
    return this.cnt = event.value.length;
  }
}

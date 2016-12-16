import { Component, OnInit } from '@angular/core';
import { User } from '../../share/user';
import { SharedData } from '../../core/share-data.service';
import {UpdateService} from '../../share/update-http.service';
import {Field} from '../../share/field';

@Component({
  template: `
  <div class="weui-cell" style="padding: 1rem;" >
    <div class="weui-cell__bd" style="display: flex;border-bottom: 1px solid #3FCA3F;">
        <input #text class="weui-input" 
        (keyup)="characterCount(text)" 
        placeholder="请输入文本" 
        maxlength="50" 
        value="{{user?.self_instruction}}"  
        type="text">
        <div class="weui-input-counter" style="color: #A5A5A5;">
            <span>{{cnt}}</span>/50
        </div>
    </div>
</div>
<button type="submit" class="weui-btn weui-btn_mini weui-btn_primary" (click)="update(text.value)" style="margin-left: 80%;">保存</button>

  `,
  providers: [UpdateService]
})
export class TextComponent implements OnInit {
  cnt =  0;
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
  characterCount(event): number {
    return this.cnt = event.value.length;
  }

  update(event) {
    this.data = {'field': 'myswear', 'type': 'text', 'value': event };
    this.savefield.UpdateField(this.data)
    .subscribe(
      res => {
        history.go(-1);
      }
    );
    console.log(event);
  }
}

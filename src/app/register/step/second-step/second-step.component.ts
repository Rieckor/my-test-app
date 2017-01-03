import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../register-http.service';
import { Router } from '@angular/router';
import { SharedData } from '../../../core/share-data.service';
import { User } from '../../../share/user';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css'],
  providers: [RegisterService]
})
export class SecondStepComponent implements OnInit {
  user: User;
  show_tip: string;
  status = 0;
  cnt =  0;
  canNext: boolean = false;
  constructor(
    private regService: RegisterService,
    private route: Router,
    private sharedata: SharedData
  ) { }

    ngOnInit() {
    this.sharedata.getData().subscribe(
      user => {
        if (user !== null) {
           this.user = user;
        }
      }
      );
  }
  // 获取上传图片result
  getRes(res: any) {
      let body = JSON.parse(res); // 将json转换为obj
      body.status === 1 ? this.canNext = true : this.show_tip = body.info;
      this.show_tip !== '' ? setTimeout(() => {this.show_tip = ''; }, 3000) : this.show_tip = this.show_tip ;
  }
  characterCount(event): number {
    return this.cnt = event.value.length;
  }

  subReg(data) {
    data === '' ? this.canNext = false : this.canNext = this.canNext ;
    if (!this.canNext) {
      this.show_tip = '二维码或者内容不能为空！';
      setTimeout(() => {this.show_tip = ''; }, 3000);
    }else {
      this.regService.postData(data)
    .subscribe (
      res => {
        if (res.status === 1 ) {
            // Navigate
            this.route.navigateByUrl('/register/step3');
        }
      },
      error => {}
    );
    }
  }

}

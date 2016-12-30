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

  characterCount(event): number {
    return this.cnt = event.value.length;
  }

  subReg(data) {
    if (data === '') {
      this.show_tip = '内容不能为空！';
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

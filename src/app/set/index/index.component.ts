import { Component, OnInit } from '@angular/core';
import { SharedData } from '../../core/share-data.service';
import { HttpcomService } from '../../share/http.services';
import { User } from '../../share/user';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [HttpcomService]
})
export class IndexComponent implements OnInit {
  user: User;
  isprecision: boolean;
  sexs = [{value: 0, viewValue: '全部'},
        {value: 1, viewValue: '男'},
        {value: 2, viewValue: '女'}
        ];
  constructor(
    private sharedata: SharedData,
    private httpcom: HttpcomService
  ) { }

  ngOnInit() {
    this.sharedata.getData().subscribe(
      user => {
        if (user != null) {
          console.log(user);
          this.user = user;
           user.isopenspre === 1 ? this.isprecision = true : this.isprecision = false;
        }
      }
      );
  }

  onit(event) {
    let url = 'http://test.irenmai.top/index.php?s=/Home/Test/IsOpenSpre';
    let data = {'IsOpenSpre': event.checked};
    this.httpcom.connect(url, data).subscribe(
      res => {
        if (res.status === 1) {
          if (event.checked === true) {
            this.isprecision = true;
          }else {
            this.isprecision = false;
          }
        }else {
          console.log('error');
        }
      }
    );
  }
  setSex(event) {
    event = parseInt(event, 10); // 强制转换10进制整形
    let url = 'http://test.irenmai.top/index.php?s=/Home/Test/setSpre';
    let data = {'field': 'spre_sex', 'value': event};
    this.httpcom.connect(url, data).subscribe(
      res => {
        if (res.status === 1) {
          this.user.spreSex = event;
          this.sharedata.setData(this.user);
        }
      });
  }
  setQr(event) {
    console.log(event);
    let url = 'http://test.irenmai.top/index.php?s=/Home/Test/setSpre';
    let value: number;
    event ? value = 1 : value = 0;
    let data = {'field': 'spre_qr', 'value': value};
    this.httpcom.connect(url, data).subscribe(
      res => {
        if (res.status === 1) {
          this.user.spreQr = value;
          this.sharedata.setData(this.user);
        }
      });
  }
}

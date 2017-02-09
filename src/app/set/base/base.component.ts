import { Component, OnInit } from '@angular/core';
import { SharedData } from '../../core/share-data.service';
import {UpdateService} from '../../share/update-http.service';
import { User } from '../../share/user';
import {Field} from '../../share/field';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  providers: [UpdateService]
})
export class BaseComponent implements OnInit {
  status = 1;
  preImgUrl: string;
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
           this.preImgUrl = user.qr_img;
        }
      }
      );
  }

  alter(event) {
    this.data = {'field': 'is_show_qr', 'type': 'number', 'value': event.checked ? 1 : 0 };
    this.savefield.UpdateField(this.data).subscribe(
      res => {
        if (res.status === 1) {
          this.user.is_show === 1 ? this.user.is_show = 0 : this.user.is_show = 1;
          this.sharedata.setData(this.user);
        }
      }
    );
  }
}

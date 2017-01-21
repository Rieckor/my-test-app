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
    this.data = {'field': 'is_show', 'type': 'Boolean', 'value': event.checked };
    this.savefield.UpdateField(this.data).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}

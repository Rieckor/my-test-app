import { Component, OnInit } from '@angular/core';
import { SharedData } from '../../core/share-data.service';
import { User } from '../../share/user';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  status = 1;
  preImgUrl = "http://test.irenmai.top/uploads/QR/oV0TBwwZqT-oZAydbvrJhERIOs9o.jpeg";
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

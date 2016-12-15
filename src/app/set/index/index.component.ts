import { Component, OnInit } from '@angular/core';
import { SharedData } from '../../core/share-data.service';
import { User } from '../../share/user';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: []
})
export class IndexComponent implements OnInit {
  user: User;
  isprecision: boolean;
  constructor(
    private sharedata: SharedData
  ) { }

  ngOnInit() {
    this.sharedata.getData().subscribe(
      user => {
        if (user != null) {
           this.user = user;
           this.isprecision = !this.user.is_show;
        }
      }
      );
  }

  onit(event) {
    if (event.checked === true) {
      this.isprecision = false;
    }else {
      this.isprecision = true;
    }
  }

}

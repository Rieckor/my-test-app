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
  isprecision: boolean = false;
  constructor(
    private sharedata: SharedData
  ) { }

  ngOnInit() {
    this.sharedata.getData().subscribe(
      user => {
        if (user != null) {
           this.user = user;
           user.is_show === 1 ? this.isprecision = true : this.isprecision = false;
        }
      }
      );
  }

  onit(event) {
    console.log(event.checked);
    if (event.checked === true) {
      this.isprecision = true;
    }else {
      this.isprecision = false;
    }
  }

}

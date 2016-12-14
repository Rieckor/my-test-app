import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private sharedata: SharedData,
    private route: Router
  ) { }

  ngOnInit() {
    this.sharedata.getData().subscribe(
      user => {
        if (user != null) {
           this.user = user;
        }
      }
      );
    if (this.user.is_show === true) {
      this.route.navigateByUrl('set/index/precision');
    }
  }

  onit(event) {
      if(event.checked === true) {
        this.route.navigateByUrl('set/index/precision');
      }else {
        this.route.navigateByUrl('set/index');
      }
  }

}

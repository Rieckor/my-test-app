import { Component, OnInit } from '@angular/core';
import { SharedData } from '../../share/share-data.service';
import { User } from '../../share/user';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: []
})
export class IndexComponent implements OnInit {
  constructor(
    private sharedata: SharedData
  ) { }

  ngOnInit() {
    this.sharedata.getData().subscribe(
      user => {
        if (user != null){
            console.log(user);
        }
      }
      );
  }

}

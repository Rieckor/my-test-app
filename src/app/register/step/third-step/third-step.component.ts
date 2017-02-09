import { Component, OnInit } from '@angular/core';
import { SharedData } from '../../../core/share-data.service';
import { User } from '../../../share/user';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.css']
})
export class ThirdStepComponent implements OnInit {
  user: User;
  constructor(
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
  }

}

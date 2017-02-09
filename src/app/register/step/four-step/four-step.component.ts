import { Component, OnInit } from '@angular/core';
import { SharedData } from '../../../core/share-data.service';
import { User } from '../../../share/user';

@Component({
  selector: 'app-four-step',
  templateUrl: './four-step.component.html',
  styleUrls: ['./four-step.component.css']
})
export class FourStepComponent implements OnInit {

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

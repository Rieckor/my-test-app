import { Component, OnInit } from '@angular/core';
import { SharedData } from '../../../core/share-data.service';
import { User } from '../../../share/user';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {
  user: User;
  constructor(
    private sharedata: SharedData
  ) { }

  ngOnInit() {
    this.sharedata.getData().subscribe(
      user => {
        if (user !== null) {
          console.log(user);
           this.user = user;
        }
      }
      );
  }

}

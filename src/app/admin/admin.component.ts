import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedData } from '../core/share-data.service';
import { User } from '../share/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  time: number = 3;
  id: any;
  constructor(
    private sharedata: SharedData,
    private route: Router
  ) { }

  ngOnInit() {
    this.sharedata.getData().subscribe(
      user => {
        if (user != null) {
          this.route.navigateByUrl('/lists/index');
        }
      }
      );
    this.id = setInterval(() => { this.getTime(); },1000);
  }

  getTime(){
    this.time--;
    if(this.time < 0){
      this.time = 0;
      this.route.navigateByUrl('/lists/index');
    }
  }

  ngOnDestroy() {
  if (this.id) {
    clearInterval(this.id);
  }
}
}

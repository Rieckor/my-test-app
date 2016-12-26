import { Component, OnInit , OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit, OnDestroy {
  time: number;
  id: any;
  type: boolean;
  constructor(
  private route: ActivatedRoute,
  private router: Router
) {}

  ngOnInit() {
    this.route.params
    .subscribe((p: Params) => {
        if ( +p['type'] === 1) {
          this.time = 1;
          this.type = true;
        }else {
          this.time = 3;
          this.type = false;
        }
    });
    this.id = setInterval(() => { this.getTime(); }, 1000);
  }

  getTime() {
    this.time--;
    if (this.time < 0) {
      this.time = 0;
      history.go(-1);
    }
  }

  ngOnDestroy() {
  if (this.id) {
    clearInterval(this.id);
  }
}
}

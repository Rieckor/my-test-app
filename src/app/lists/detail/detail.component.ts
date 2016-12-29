import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title }     from '@angular/platform-browser';

import { List } from '../list';
import { DetailService } from './detail.service';

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [DetailService]
})
export class DetailComponent implements OnInit {
  info: List[];
  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
    private detailsev: DetailService
  ) { }

  ngOnInit() {
    this.setTitle('详情列表');
    this.route.params
    .subscribe((p: Params) => {
        if ( +p['id']) {
          this.detailsev.getdetail(+p['id'])
          .subscribe( (detail) => {
            if (detail['fan_status'] !== '1') {
                this.router.navigate(['/notice/0', { msg: '该用户已禁用或不存在！' }]);
            }
            this.info = detail;
           });
        }else {
          this.router.navigate(['/notice/0', { msg: '参数错误！' }]);
        }
    });
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}

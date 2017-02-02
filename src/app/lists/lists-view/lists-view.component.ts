import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TitleService } from '../../share/title.service';
import { SharedData } from '../../core/share-data.service';
import 'rxjs/add/operator/switchMap';

import { List } from '../list';
import { ListService } from './lists.service';
import { HttpcomService } from '../../share/http.services';
@Component({
  selector: 'app-lists-view',
  templateUrl: './lists-view.component.html',
  styleUrls: ['./lists-view.component.css'],
  providers: [ListService, TitleService, HttpcomService]
})
export class ListsViewComponent implements OnInit {
  myId: number;
  cooltime: string;
  errorMessage: string;
  lists: List[];
  tab: string;
  page: number = 1;
  ScrollDisabled: boolean = false;
  status: boolean;
  constructor(
    private httpcom: HttpcomService,
    private share: SharedData,
    private title: TitleService,
    private route: ActivatedRoute,
    private router: Router,
    private listService: ListService
  ) { }
  ngOnInit() {
    this.route.params
      .subscribe(p => {
        this.status = false; // 加载状态初始化
        if (p['type'] === 'index') {
            this.title.setTitle('人脉列表');
        }else if ( p['type'] === 'group' ) {
            this.title.setTitle('群组列表');
        }else if ( p['type'] === 'precision' ) {
            this.title.setTitle('精准列表');
        }
        this.tab = p['type'];
        this.getLists(this.tab, this.page = 1);
      });
    this.share.getData().subscribe(
      owner => {
        if (owner != null) {
            this.myId = owner.id;
        }
      }
    );
  }
  getLists(type, page) {
    this.listService.getLists(type, page)
      .subscribe(
      lists => { this.lists = lists; this.status = true; },
      error => this.errorMessage = <any>error);
  }
  onScrollDown() {
    console.log('scrolled!!');
    this.listService.getLists(this.tab, ++this.page)
      .subscribe(
      lists => {
        lists.length === 0 ? this.ScrollDisabled = true : this.ScrollDisabled = false;
        lists.forEach(element => {
          this.lists.push(element);
        });
      },
      error => this.errorMessage = <any>error);
  }
  getDetail(id) {
    // Navigate with relative link
    this.router.navigate([id], { relativeTo: this.route });
  }
  // 置顶操作
  upTop() {
    let url = 'http://test.irenmai.top/index.php?s=/Home/Test/upTop';
    let body = {'id': this.myId};
     this.httpcom.connect(url, body).subscribe(
                res => {
                  if (res.status === 1) {
                    this.lists.forEach((element, index) => {
                        if (element.id === this.myId.toString()) {
                            this.lists.splice(index, 1);
                            this.lists.unshift(element);
                        }
                    });
                  }else {
                      this.countDown(res.message);
                  }
                 }
            );
  }
  // 倒计时
  private countDown(time) {
    let cnt = setInterval(() => {
      let date = new Date(time);
      this.cooltime = date.getMinutes() + ':' + this.fix(date.getSeconds(), 2);
      time -= 1000;
      if (time <= 0) {
        clearInterval(cnt);
        this.cooltime = null;
      }
    }, 1000);
  }
  // 保留两位整数
  private fix(num, length) {
  return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
}
}

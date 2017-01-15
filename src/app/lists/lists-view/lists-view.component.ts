import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TitleService } from '../../share/title.service';
import { SharedData } from '../../core/share-data.service';
import 'rxjs/add/operator/switchMap';

import { List } from '../list';
import { ListService } from './lists.service';
@Component({
  selector: 'app-lists-view',
  templateUrl: './lists-view.component.html',
  styleUrls: ['./lists-view.component.css'],
  providers: [ListService, TitleService]
})
export class ListsViewComponent implements OnInit {
  myId: number;
  errorMessage: string;
  lists: List[];
  tab: string;
  page: number = 1;
  ScrollDisabled: boolean = false;
  status: boolean;
  constructor(
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
  upTop() {
    console.log(this.myId);
    this.lists.forEach((element, index) => {
        if (element.id === this.myId.toString()) {
            this.lists.splice(index, 1);
            this.lists.unshift(element);
        }
    });
  }
}

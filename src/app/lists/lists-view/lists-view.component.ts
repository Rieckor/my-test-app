import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { TitleService }     from '../../share/title.service';
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
  errorMessage: string;
  lists: List[];
  tab: string;
  page: number = 1;
  ScrollDisabled: boolean = false;

  constructor(
    private title: TitleService,
    private route: ActivatedRoute,
    private router: Router,
    private listService: ListService
    ) { }
  ngOnInit() {
    this.route.params
      .subscribe(p => {
          this.title.setTitle(p['type']);
          this.tab = p['type'];
          this.getLists(this.tab, this.page = 1);
      });
  }
  getLists(type, page) {
    this.listService.getLists(type, page)
      .subscribe(
      lists => {this.lists = lists; },
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
    console.log('"upTop down!"');
  }
}

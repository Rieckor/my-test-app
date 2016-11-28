import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import 'rxjs/add/operator/switchMap';

import { List } from './list';
import { ListService } from './lists.service';
@Component({
  selector: 'app-lists-view',
  templateUrl: './lists-view.component.html',
  styleUrls: ['./lists-view.component.css'],
  providers: [ListService]
})
export class ListsViewComponent implements OnInit {

 errorMessage: string;
  lists: List[];
  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
    private listService: ListService
    ) { }
  ngOnInit() {
    let type = this.route.snapshot.params['type'];
    switch (type) {
      case 'index':
        this.setTitle('人脉列表');
        break;
      case 'group':
        this.setTitle('群落列表');
        break;
      case 'precision':
        this.setTitle('精准列表');
        break;
      default:
      this.setTitle('人脉列表');
        break;
    }
    this.getLists();
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  getLists() {
    this.listService.getLists()
      .subscribe(
      lists => this.lists = lists,
      error => this.errorMessage = <any>error);
  }
  onScrollDown() {
    console.log('scrolled!!');
    this.listService.getLists()
      .subscribe(
      lists => {
        lists.forEach(element => {
          this.lists.push(element);
        });
      },
      error => this.errorMessage = <any>error);
  }
  getDetail(){
    this.router.navigate(['/detail', 1]);
  }
}

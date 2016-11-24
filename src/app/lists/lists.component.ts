import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title }     from '@angular/platform-browser';

import { List } from './list';
import { ListService } from './lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [ListService]
})
export class ListsComponent implements OnInit {
  errorMessage: string;
  lists: List[];
  constructor(private titleService: Title, private router: Router, private listService: ListService) { }
  ngOnInit() {this.setTitle('人脉列表'); this.getLists(); }

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



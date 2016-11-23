import { Component, OnInit } from '@angular/core';
import { List } from './list';
import { ListService } from './lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [ ListService]
})
export class ListsComponent implements OnInit {

  errorMessage: string;
  lists: List[];
  mode = 'Observable';
  constructor (private listService: ListService) {}
  ngOnInit() { this.getLists(); }
  getLists() {
    this.listService.getLists()
                     .subscribe(
                       lists => this.lists = lists,
                       error =>  this.errorMessage = <any>error);
  }
  onScrollDown () {
    console.log('scrolled!!');
    this.listService.getLists()
                     .subscribe(
                       lists => {
                         lists.forEach(element => {
                           this.lists.push(element);
                         });
                       },
                       error =>  this.errorMessage = <any>error);
  }
  }

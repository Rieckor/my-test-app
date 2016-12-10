import { Component, OnInit } from '@angular/core';
import { SetListService } from '../get-set-http.service';
import { SetList } from '../set-list';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [SetListService]
})
export class IndexComponent implements OnInit {
  errorMessage: string;
  constructor(
    private setlists: SetListService
  ) { }

  ngOnInit() {
    this.setlists.getLists()
    .subscribe(
      info => {
        console.log(info);
      },
      error => this.errorMessage = <any>error
    );
  }

}

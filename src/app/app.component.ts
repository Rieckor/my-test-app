import { Component } from '@angular/core';
import { SetUserService } from './core/get-user-http.service';
import { SharedData } from './core/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SetUserService]
})
export class AppComponent  {
errorMessage: string;
constructor(
    private setuser: SetUserService,
    private sharedata: SharedData
  ) {
    this.setuser.getLists()
    .subscribe(
      info => {
        this.sharedata.setData(info);
      },
      error => this.errorMessage = <any>error
    );
  }



}

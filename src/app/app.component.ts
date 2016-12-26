import { Component } from '@angular/core';
import { SetUserService } from './core/get-user-http.service';
import { SharedData } from './core/share-data.service';
import { Router } from '@angular/router';

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
    private sharedata: SharedData,
    private route: Router
  ) {
    this.setuser.getLists()
    .subscribe(
      info => {
        if (info != null) {
          info.status === 1 ? this.sharedata.setData(info) : this.route.navigateByUrl('/notice');
        }
      },
      error => this.errorMessage = <any>error
    );
  }
}

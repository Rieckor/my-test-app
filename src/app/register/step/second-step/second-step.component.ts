import { Component } from '@angular/core';
import { RegisterService } from '../../register-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css'],
  providers: [RegisterService]
})
export class SecondStepComponent  {
  cnt =  0;
  constructor(
    private regService: RegisterService,
    private route: Router
  ) { }

  characterCount(event): number {
    return this.cnt = event.value.length;
  }

  subReg(data) {
    this.regService.postData(data)
    .subscribe (
      res => {
        console.log(res.status);
        if (res.status === 1 ) {
            // Navigate
            this.route.navigateByUrl('/register/step3');
        }
      },
      error => {}
    );
  }

}

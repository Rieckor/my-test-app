import { Component } from '@angular/core';
import { RegisterService } from '../../register-http.service';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css'],
  providers: [RegisterService]
})
export class SecondStepComponent  {
  cnt =  0;
  constructor(
    private regService: RegisterService
  ) { }

  characterCount(event): number {
    return this.cnt = event.value.length;
  }

  subReg(data) {
    this.regService.postData(data)
    .subscribe (
      any => { console.log(any); },
      error => {}
    );
  }

}

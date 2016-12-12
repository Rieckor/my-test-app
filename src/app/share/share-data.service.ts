import { Injectable }     from '@angular/core';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';
import { User } from './user';

@Injectable()
export class SharedData {
  private subject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  getData() {
    return this.subject.asObservable();
  }
  setData(data: User) {
    this.subject.next(data);
  }
}

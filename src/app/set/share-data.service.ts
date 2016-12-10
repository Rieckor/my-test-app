import { Injectable }     from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { SetList } from './set-list';

@Injectable()
export class SharedData {
  private subject: Subject<SetList> = new Subject<SetList>();

  getdate$ = this.subject.asObservable();

  setData(data: SetList) {
    this.subject.next(data);
  }
}

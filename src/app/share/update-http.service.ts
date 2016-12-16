import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Status } from '../share/update-status';
import { Field } from '../share/Field';

@Injectable()
export class UpdateService {
  private listsUrl = 'http://test.irenmai.top/index.php?s=/Home/Test/updateField';  // URL to web API
  constructor (
    private http: Http
  ) {}
  UpdateField (data: Field): Observable<Status> {
    return this.http.post(this.listsUrl, data)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

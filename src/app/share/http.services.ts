import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Status } from '../share/update-status';

@Injectable()
export class HttpcomService {
  constructor (
    private http: Http
  ) {}
  connect (Url: string, data: any = null, isPost = true): Observable<Status> {
    if (isPost ) {
        return this.http.post(Url, data)
                    .map(res => res.json())
                    .catch(this.handleError);
    }else{
        return this.http.get(Url)
                    .map(res => res.json())
                    .catch(this.handleError);
    }

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

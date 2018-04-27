import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharepointService {

  constructor(private http: HttpClient) {
  }

  public getAbsenseList(): Observable<any> {
    return this.http.get('https://intranet.blinfo.se/_api/lists/getbytitle(\'Frånvarolista\')/items');
  }
}

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ChallengeService {

  host = '/api/Challenges';

  constructor(private http:Http) { }

  find(params?:any) {
    return this.http.get('http://localhost:3000' + this.host + '/',{params : params}).map((response) => response.json())
  }

}

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class ChallengeService {

  private host = environment.hostServer + '/api/Challenges';

  constructor(private http:Http) { }

  find(params?:any) {
    return this.http.get(this.host + '/',{params : params}).map((response) => response.json())
  }

  continueCode(){
    return this.http.get(this.host + '/rest/continue-code').map((response) => response.json())
  }

  restoreProgress(continueCode){
    return this.http.put(this.host + '/rest/continue-code/apply/' +continueCode,{}).map((response) => response.json())
  }

}

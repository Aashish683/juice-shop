import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ChallengeService {

  private host = environment.hostServer + '/api/Challenges';

  constructor(private http:HttpClient) { }

  find(params?:any) {
    return this.http.get(this.host + '/',{params : params})
  }

  continueCode(){
    return this.http.get(this.host + '/rest/continue-code')
  }

  restoreProgress(continueCode){
    return this.http.put(this.host + '/rest/continue-code/apply/' +continueCode,{})
  }

}

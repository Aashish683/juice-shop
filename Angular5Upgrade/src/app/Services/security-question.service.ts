import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SecurityQuestionService {
  host = '/api/SecurityQuestions';
  constructor(private http:Http) { }

  find(params?){
   return this.http.get(this.host+'/',{params:params}).map(response=>response.json());
  }

  findBy(email){
   return this.http.get('/rest/user/security-question?email=' + email).map(response=>response.json());
  }


}

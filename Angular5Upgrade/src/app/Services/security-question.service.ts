import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class SecurityQuestionService {
  host = '/api/SecurityQuestions';
  hostServer = environment.hostServer;
  constructor(private http:Http) { }

  find(params?){
   return this.http.get(this.hostServer+this.host + '/',{params:params}).map(response=>response.json());
  }

  findBy(email){
   return this.http.get(this.hostServer + '/rest/user/security-question?email=' + email).map(response=>response.json());
  }


}

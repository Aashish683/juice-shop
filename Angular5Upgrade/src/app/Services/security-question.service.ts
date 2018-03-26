import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class SecurityQuestionService {
  host = '/api/SecurityQuestions';
  hostServer = environment.hostServer;
  constructor(private http:HttpClient) { }

  find(params?){
   return this.http.get(this.hostServer+this.host + '/',{params:params});
  }

  findBy(email){
   return this.http.get(this.hostServer + '/rest/user/security-question?email=' + email);
  }


}

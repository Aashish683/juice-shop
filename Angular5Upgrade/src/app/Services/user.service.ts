import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  isLoggedIn:boolean=false;
  constructor(private http:HttpClient) { }

  login(params){
   return this.http.post('/rest/user/login',params);
  }

  testServer(){
    return this.http.get('/rest/admin/application-version');
  }

}

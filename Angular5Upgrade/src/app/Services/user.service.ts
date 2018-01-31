import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  isLoggedIn:boolean=false;
  constructor(private http:HttpClient) { }

  login(params){
   return this.http.post('http://localhost:3000/rest/user/login',params);
  }

  testServer(){
    return this.http.get('http://localhost:3000/rest/admin/application-version');
  }

}

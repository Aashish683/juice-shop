import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

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

  whoAmI(){
    return this.http.get('/rest/user/whoami').map((response:any)=>response.user);
  }

}

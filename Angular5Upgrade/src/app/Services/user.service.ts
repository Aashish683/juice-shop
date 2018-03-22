import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  hostServer = environment.hostServer;
  isLoggedIn = false;
  constructor (private http: HttpClient) { }

  login (params) {
    return this.http.post(this.hostServer + '/rest/user/login', params);
  }

  testServer () {
    return this.http.get(this.hostServer + '/rest/admin/application-version');
  }

  whoAmI () {
    return this.http.get(this.hostServer + '/rest/user/whoami').map((response: any) => response.user);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class AdministrationService {

  host:string = environment.hostServer + '/rest/admin'
  constructor(private http:HttpClient) { }

  getApplicationVersion(){
    return this.http.get(this.host + '/application-version')
    }

}

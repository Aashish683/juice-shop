import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigurationService {
  host = environment.hostServer + '/rest/admin';

  constructor(private http:HttpClient) { }

  getApplicationConfiguration(){
    return this.http.get(this.host
        +'/application-configuration').map((response:any)=>response.config);
  }

  testConfiguration(){
    return Observable.from([obj]);
  }
}

const obj = [];

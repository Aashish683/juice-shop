import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
@Injectable()
export class ConfigurationService {
  host = '/rest/admin';

  constructor(private http:Http) { }

  getApplicationConfiguration(){
    return this.http.get('http://localhost:3000'+ this.host
        +'/application-configuration').map(response=>response.json().config);
  }

  testConfiguration(){
    return Observable.from([obj]);
  }
}

const obj = [];

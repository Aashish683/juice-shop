import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigurationService {
  host = environment.hostServer + '/rest/admin';

  constructor(private http:Http) { }

  getApplicationConfiguration(){
    return this.http.get(this.host
        +'/application-configuration').map(response=>response.json().config);
  }

  testConfiguration(){
    return Observable.from([obj]);
  }
}

const obj = [];

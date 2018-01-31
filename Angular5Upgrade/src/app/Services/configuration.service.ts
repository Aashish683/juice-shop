import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigurationService {
  host = '/rest/admin';

  constructor(private http:Http) { }

  getApplicationConfiguration(){
    return this.http.get('http://localhost:3000'+ this.host
        +'/application-configuration').map(response=>response.json().config);
  }
}

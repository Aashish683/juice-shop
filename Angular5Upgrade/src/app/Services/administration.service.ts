import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdministrationService {
  host:string= '/rest/admin'
  constructor(private http:Http) { }

  getApplicationVersion(){
    return this.http.get(this.host + '/application-version').map
    (response=>response.json()
    )
    }

}

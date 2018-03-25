import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class AdministrationService {

  host:string = environment.hostServer + '/rest/admin'
  constructor(private http:Http) { }

  getApplicationVersion(){
    return this.http.get(this.host + '/application-version').map
    (response=>response.json()
    )
    }

}

import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductService {

  host = environment.hostServer;
  constructor(private http:Http) { }

  search(){
    return this.http.get(this.host + '/rest/product/search?q=').map(response=>response.json().data);
  }

  test(){
    return Observable.from([obj]);
  }
}

const obj = [];

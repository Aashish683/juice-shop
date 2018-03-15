import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

@Injectable()
export class ProductService {

  constructor(private http:Http) { }

  search(){
    return this.http.get('http://localhost:3000/rest/product/search?q=').map(response=>response.json().data);
  }

  test(){
    return Observable.from([obj]);
  }
}

const obj = [];

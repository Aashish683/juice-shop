import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http:Http) { }

  search(){
    return this.http.get('/rest/product/search?q=').map(response=>response.json().data);
  }

}

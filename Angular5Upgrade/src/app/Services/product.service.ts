import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private http:Http) { }

  search(){
    return this.http.get('http://localhost:3000/rest/product/search?q=').map(response=>response.json().data);
  }

}

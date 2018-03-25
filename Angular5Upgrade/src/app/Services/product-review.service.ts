import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductReviewService {
  host:string = environment.hostServer + '/rest/product';
  constructor(private http:Http) { }

  get(id){
    return this.http.get(this.host + '/' + id + '/reviews').map(response=>(response.json()).data);
  }
}

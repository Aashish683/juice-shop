import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor(private http:Http) { }

  changEnvt(){
   return this.http.get('http://localhost:3000/rest/test');
  }

}

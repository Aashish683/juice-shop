import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class TestService {
  beenCalled:boolean=false;
  constructor() { }

  test(){
    return Observable.from([obj]);
  }

  testConfiguration(){
    this.beenCalled=true;
    return Observable.from([objConfig]);
  }
}

const obj = [];
const objConfig = [];

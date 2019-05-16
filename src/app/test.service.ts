import { testData } from './testData';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  result= testData
  constructor() { }

  get getData(){
    console.log(this.result)
    return testData
    
  }
}

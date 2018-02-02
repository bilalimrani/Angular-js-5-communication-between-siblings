import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {

  private selectionFormatState = new Subject();
  constructor() { }

  setState(state:any){
    this.selectionFormatState.next(state);
  }

  getState(Observable){
    return this.selectionFormatState.asObservable();
  }

}

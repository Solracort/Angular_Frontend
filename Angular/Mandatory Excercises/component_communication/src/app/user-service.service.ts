import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  childServiceMessage  : string = "CHILD USING SERVICE";
  parentServiceMessage : string = "PARENT USING SERVICE";
  
  private parentObs$: Subject<string> = new Subject();
  private childObs$:  Subject<string> = new Subject();

  getParentObs$() {
    return this.parentObs$;
  }
  getChildObs$(){
    return this.childObs$;
  }
  sendMessageParent(message:string) {
    this.parentObs$.next(message);
    this.parentObs$.complete(); 
  }
  sendMessageChild(message:string) {
    this.childObs$.next(message);
  }
  
}

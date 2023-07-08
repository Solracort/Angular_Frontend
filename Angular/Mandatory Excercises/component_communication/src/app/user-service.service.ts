import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  childServiceMessage  : string = "CHILD USING SERVICE";
  parentServiceMessage : string = "PARENT USING SERVICE";
  
  private parentObs$: BehaviorSubject<string> = new BehaviorSubject('');
  private childObs$:  BehaviorSubject<string> = new BehaviorSubject('');

  getParentObs$() {
    return this.parentObs$;
  }
  getChildObs$(){
    return this.childObs$;
  }
  sendMessageParent(message:string) {
    this.parentObs$.next(message);
  }
  sendMessageChild(message:string) {
    this.childObs$.next(message);
  }
  
}

import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {myCounter} from '../interface/mycounter.interface'


@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter$ : BehaviorSubject<myCounter> = new BehaviorSubject({} as myCounter);

  public currentCounter$: Observable<myCounter> = this.counter$.asObservable();
 
  startValues(){
    this.counter$.next({...this.counter$.value,start: !this.counter$.value.start})
    
    if (this.counter$.value.start){
      
        if (this.counter$.value.actualVal===0 && this.counter$.value.setVal !==0) 
          this.counter$.next({...this.counter$.value, actualVal: this.counter$.value.setVal})
                
        setTimeout(()=>{
          this.counter$.next({...this.counter$.value, 
                              actualVal:
                                       this.counter$.value.actualVal + 
                                       (this.counter$.value.stepVal * this.counter$.value.countUp)
                            });
        
          this.counter$.next({...this.counter$.value,start: !this.counter$.value.start})
          this.startValues()  
      }, 1000)    
    }
  }
  
  resetValues(){
    this.counter$.next(  {
      actualVal: 0,
      countUp: 1,
      setVal:0,
      stepVal: 2,
      start: false,
    })
  }
 
  updateValues(counterDisplay: myCounter){
    this.counter$.next({...counterDisplay});
  }  

}

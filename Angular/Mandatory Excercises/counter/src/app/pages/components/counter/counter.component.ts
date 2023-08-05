import { Component, computed, signal } from '@angular/core';


interface myCounter {
  actualValue : number;
  countUp: number;
  setVal: number;
  stepVal:number;
  start:boolean;
}

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})


export class CounterComponent {
  public counter = signal<myCounter>({
    actualValue: 0,
    countUp: 1,
    setVal: 0,
    stepVal: 2,
    start: false,
  })

  public speed: number = 500;
   
  reset(){
    //Restore the init values
    this.counter().actualValue= 0;
    this.counter().countUp= 1,
    this.counter().setVal= 0,
    this.counter().stepVal= 2,
    this.counter().start= false;
  }

  pause() {
    // stop the counter & start to count
    this.counter.set({...this.counter(),  start: !this.counter().start})
    this.count();
  }

  count() {
    //begin the counter
    if (this.counter().start) {
    
      setTimeout(() =>{ 
        this.counter.set({...this.counter(), actualValue: this.counter().actualValue + (this.counter().stepVal * this.counter().countUp)})
      }, this.speed);
      this.count()
    }
  }

  updateCounter() {
    //update the counter value
    if (this.counter().start) {
      setTimeout(() =>{ 
        this.counter.set({...this.counter(), actualValue: this.counter().actualValue + (this.counter().stepVal * this.counter().countUp)})
        this.updateCounter()
      }, this.speed);
    }
  }

  onFieldUpdated( field: keyof myCounter, value: string){


  }

}

import { Component, OnInit, inject } from '@angular/core';
import { myCounter } from 'src/app/interface/mycounter.interface';
import { CounterService } from 'src/app/services/counter.service';


@Component({
  selector: 'counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit{
  // inyeccion de servicio como variable
  public myCounterService = inject(CounterService)
  // el contador que se muestra por web desde el componente
  public counterDisplay: myCounter ={} as myCounter

ngOnInit(): void {
  this.myCounterService.currentCounter$
    .subscribe(
      objetoContador => this.counterDisplay = {...objetoContador}
    )
  this.reset();
}

start(){
  this.myCounterService.startValues()
  // this.counterDisplay.start=!this.counterDisplay.start;
  //   if (this.counterDisplay.start){
  //     if (this.counterDisplay.actualVal===0) this.counterDisplay.actualVal= this.counterDisplay.setVal;
  //     setTimeout(()=>{
  //     this.counterDisplay.actualVal =( this.counterDisplay.actualVal + 
  //                                   (this.counterDisplay.stepVal * this.counterDisplay.countUp));
  //     this.counterDisplay.start=!this.counterDisplay.start
  //     this.start()  
  //   }, 1000)    
  // }
}

reset(){
  this.myCounterService.resetValues()
  // this.counterDisplay = {
  //   actualVal: 0,
  //   countUp: 1,
  //   setVal:0,
  //   stepVal: 2,
  //   start: false,
  // }
}

onFieldUpdated(field: keyof myCounter , value:string){
  this.counterDisplay = ({...this.counterDisplay, [field]:Number(value)});
  this.myCounterService.updateValues(this.counterDisplay)
}

}

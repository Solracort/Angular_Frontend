import { Component } from '@angular/core';
import { TrafficLightService } from 'src/app/service/traffic-light.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {
  public colorSeleccionado: string = '';
  private isWorking: boolean = false;
  constructor(private myTrafficlightService: TrafficLightService) {}

  ngOnInit(): void {
    this.myTrafficlightService.encendido$.subscribe((trigger) =>this.isWorking=trigger);
  }
  turnOn(){
    this.myTrafficlightService.encendido$.next(
      !this.myTrafficlightService.encendido$.value
    );
  }
  selectColor() {
    if (this.isWorking){
      console.log('Color seleccionado en el controlador:', this.colorSeleccionado); 
      this.myTrafficlightService.color$.next(this.colorSeleccionado)
    }
    
  }
}
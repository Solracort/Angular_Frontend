import { Component } from '@angular/core';
import { TrafficLightService } from 'src/app/service/traffic-light.service';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent {

  public primeColor = ''
  constructor (private myTrafficlightService: TrafficLightService) {}

  ngOnInit(): void {
    this.myTrafficlightService.encendido$.subscribe
    ((trigger) =>
      {
        if (trigger) this.myTrafficlightService.color$.subscribe(
          (color)=>{
            setTimeout(()=>{
              this.primeColor=color;
              console.log('Este es el color que debe encenderse en el semaforo:', this.primeColor);
            }, 300)
            
        });else this.primeColor='' ;
      
      }
    );
    
  }
}

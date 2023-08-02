import { Component } from '@angular/core';
import { BehaviorSubject, first } from 'rxjs';
import { MyGraphicService } from 'src/app/services/my-graphic.service';

@Component({
  selector: 'first-chart',
  templateUrl: './first-chart.component.html',
  styleUrls: ['./first-chart.component.css']
})
export class FirstChartComponent  {

  public imageUrl : string = '';
  
  constructor(private myService: MyGraphicService) {}
  // solamente cargamos los datos en caso que la variable loading del servicio sea false, lo que indica que ya se han traido los valores
  ngOnInit(){
    this.myService.loading$.subscribe
      ((valor) =>{
          if(!valor){
            this.imageUrl = this.myService.firstChartBuild();
          }
        })  
  }

}

import { Component } from '@angular/core';
import { MyGraphicService } from 'src/app/services/my-graphic.service';

@Component({
  selector: 'second-chart',
  templateUrl: './second-chart.component.html',
  styleUrls: ['./second-chart.component.css']
})
export class SecondChartComponent {
  public imageUrl : string = '';
  
  constructor(private myService: MyGraphicService) {}
  
  ngOnInit(){
    
    this.imageUrl = this.myService.secondChartBuild();
    // console.log('second chart:',this.imageUrl)
  }
}

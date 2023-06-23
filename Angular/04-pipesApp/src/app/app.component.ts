import { Component } from '@angular/core';
import { PrimeNGConfig} from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  public title = 'cArLoS oRtIz';

  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit(){
    this.primengConfig.ripple = true;
  }



}

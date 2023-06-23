import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  
})
export class BasicsPageComponent {
  
  public nameLower: string = 'carlos';
  public nameUpper: string = 'CARLOS';
  public fullName : string = "cARloS OrtIz"

  public customDate : Date = new Date ();

}

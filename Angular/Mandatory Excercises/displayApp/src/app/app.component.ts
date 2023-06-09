import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  titleButton: string = 'Mostrar';
  visible:boolean =false;

  showDiv() {
    if (!this.visible){
      this.titleButton= "Ocultar";
      this.visible=true;
    } else {
      this.titleButton= "Mostrar";
      this.visible=false;
    }
    
  }

}

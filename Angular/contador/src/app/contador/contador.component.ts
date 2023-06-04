import  { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
            <div class="content" role="main">
                <h1>CONTADOR APP</h1>
                <h3>La base es: {{base}}</h3>
                <div class="counter">
                    <button (click)=" actualizar(base) ">+{{base}}</button>
                    <span>  {{contador}}  </span>
                    <button (click)=" actualizar(-base)">-{{base}}</button>
                </div>
                
            </div> 
            `
})
export class ContadorComponent {
    title:    string = 'contador';
    contador: number = 10;
    base:     number = 5;
  
    actualizar(valor : number) {
      this.contador +=valor;
    }
}


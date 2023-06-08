import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {
  
  personajes: Personaje[] =[
    {
      nombre: 'Goku',
      poder:25000
    },
    {
      nombre: 'Gohan',
      poder:20000
    },
    {
      nombre: 'Picolo',
      poder:16000
    }
  ];
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder : 1000
  }
  agregarNuevoPersonaje ( argumento: Personaje){
    this.personajes.push(argumento);
  }
  
}

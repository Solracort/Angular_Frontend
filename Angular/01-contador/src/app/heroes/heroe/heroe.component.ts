import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})


export class HeroeComponent{
    nombre: string = 'Ironman'
    edad : number = 45

    get nombreCapitalizado (){
        return this.nombre.toUpperCase()
    }
    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`
    }
    cambiarNombre(): void{
        (this.nombre==='Ironman')?this.nombre='Spiderman':this.nombre='Ironman'
    }
    cambiarEdad():void{
        (this.edad===45)?this.edad=30:this.edad=45;
    }
}
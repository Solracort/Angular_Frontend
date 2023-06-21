import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import {switchMap, tap} from 'rxjs/operators'
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: []
})
export class VerPaisComponent implements OnInit {

  pais!: Country[] ;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private paisService: PaisService
    ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.paisService.getPaisPorAlpha(id)), tap(console.log)
    )
    .subscribe ( pais => {
      this.pais=pais;
      console.log("Este es el pais que asigno a la variable: ", this.pais)
    })
    // this.activatedRoute.params
    //   .subscribe(({id}) => {
    //     console.log(id);

    //     this.paisService.getPaisPorAlpha(id)
    //       .subscribe (pais =>{
    //           console.log(pais);
    //     })
    //   })
  }
  // event(){
  //   console.log(this.pais[0].name.common)
  // }
}

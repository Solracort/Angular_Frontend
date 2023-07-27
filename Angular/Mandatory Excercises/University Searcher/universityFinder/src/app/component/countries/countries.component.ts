import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, debounceTime, filter, map } from 'rxjs';
import { uniFields } from 'src/app/interfaces/uniFields.interface';
import { UniversityServiceService } from 'src/app/services/university-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, OnDestroy {
  
  public country$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private debouncer            : Subject<string> = new Subject();

  termino              : string = "";
  isError              : boolean = false;
  universities         : uniFields[] = [];
  suggestedUniversities: uniFields[] = [];
  showSuggested        : boolean = false; 
  chosenUniv           : uniFields = {
      "id": '',
      "domains": [], 
      "web_pages": [],
      "country": '',
      "alpha_two_code": '',
      "state-province": null
  }

  constructor(private universityService: UniversityServiceService,
              private route: ActivatedRoute
    ){}
  

  ngOnInit(): void {
    
    
    
    //obtengo el valor del country de la direccion del navegador
    this.route.paramMap
      .subscribe((valor)=>this.country$.next(valor.get('countryName')!));

    //uso el valor de este observable para buscar sugerencias llamando al metodo suggestions  
    this.debouncer
    .pipe(
      debounceTime(300))
      .subscribe( valor=>{
        this.suggestions(valor)
    })
  }
  ngOnDestroy(): void {
    this.country$.unsubscribe();
    this.debouncer.unsubscribe();
    console.log("Llamando ngOnDestroy")
  }
  
  get country(){return this.country$.value}

  buscar(termino:string){
    
    this.isError= false;
    this.showSuggested = false;
    this.termino= termino;
    this.universityService.buscarUniversidadconcreta(termino)
    .subscribe((universities)=>{
        
        this.chosenUniv = universities;
        console.log('Universidad buscada', this.chosenUniv)
      })
  }
  suggestions(termino:string){
    console.log('El pais en el que estamos buscando es: ', this.country$.value)
    this.isError= false;
    this.termino = termino;
    this.showSuggested = true;
    this.universityService.buscarUniversidad(this.country)
      .subscribe(
      (universities: uniFields[]) => {
       
        // Filter universities based on the 'id' property containing the 'termino'
        console.log('esto es lo que envio para buscar sugerencias:', this.termino);
  
        
        const filteredUniversities = universities.filter(
          (valor: uniFields) =>valor.id.includes(termino || termino.toLowerCase() || termino.toUpperCase())
        );
  
        // Slice the first 5 filtered universities to get suggestions
        this.suggestedUniversities = filteredUniversities.slice(0, 5);
        console.log("Estas son las universidades de las sugerencias", this.suggestedUniversities);
      }
    );
  }


  teclaPresionada (){
    this.debouncer.next(this.termino);
  }
 
  buscarSugerido(termino:string){
    this.buscar(termino);
  }
  reset(){
    this.chosenUniv.id= '';
    this.chosenUniv.domains =[];
    this.chosenUniv.web_pages = [];
    this.chosenUniv.country = '';
    this.chosenUniv.alpha_two_code ='';
    this.chosenUniv['state-province'] = null;
    this.termino = '';
     
  }

}

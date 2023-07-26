import { Component } from '@angular/core';
import { BehaviorSubject, Subject, debounceTime } from 'rxjs';
import { uniFields } from 'src/app/interfaces/uniFields.interface';
import { UniversityServiceService } from 'src/app/services/university-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  
  public country$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  debouncer: Subject<string> = new Subject();

  termino              : string = "";
  isError              : boolean = false;
  universities         : uniFields[] = [];
  suggestedUniversities: uniFields[] = [];
  showSuggested        : boolean = false; 

  constructor(private universityService: UniversityServiceService,
              private route: ActivatedRoute
    ){}

  ngOnInit(): void {

    this.route.paramMap
      .subscribe((valor)=>this.country$.next(valor.get('countryName')!));

      
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor=>{
      this.suggestions(valor)
    })
  }
  buscar(termino:string){
    
    this.isError= false;
    this.showSuggested = false;
    this.universityService.buscarUniversidad(this.termino)
      .filter((universities)=>{
        console.log(universities);
        this.universities = universities;
      }, (err)=>{
          this.isError=true;
          this.universities = []
      })
  }
  suggestions(termino:string){
    console.log('El pais en el que estamos buscando es: ', this.country$.value)
    this.isError= false;
    this.termino = termino;
    this.showSuggested = true;
    this.universityService.buscarUniversidad(this.termino)
      .subscribe((universities)=>{
        console.log('esto es lo que envio para buscar sugerencias:',this.termino);
        this.suggestedUniversities=universities.splice(0,5)},
        (err) => this.suggestedUniversities=[]
      )    
      console.log("Estas son las universidades de las sugerencias", this.suggestedUniversities)
  }


  teclaPresionada (){
    this.debouncer.next(this.termino);
  }
 
  buscarSugerido(termino:string){
    this.buscar(termino);
  }


}

import { Injectable } from '@angular/core';
import { uniFields } from '../interfaces/uniFields.interface';
import { Observable, filter, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversityServiceService {

  apiUrl: string = 'localhost:3000'

  constructor(private http: HttpClient) { }

  buscarUniversidad(termino:string, country:string):Observable<uniFields[]> {
    
    const url : string = `${this.apiUrl}/universities`   
    return this.http.get<uniFields[]>(url)
      .pipe(
        
          map((results) => results.filter((result) => result.country === country))
      );
      

  }
}

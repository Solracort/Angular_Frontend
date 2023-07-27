import { Injectable } from '@angular/core';
import { uniFields } from '../interfaces/uniFields.interface';
import { Observable, filter, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversityServiceService {

  apiUrl: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  buscarUniversidad( country:string):Observable<uniFields[]> {
    const headers = new HttpHeaders()
      // .append('Content-Type', 'application/json')
      // .append('Access-Control-Allow-Headers', 'Content-Type')
      // .append('Access-Control-Allow-Methods', 'GET')
      // .append('Access-Control-Allow-Origin', '*')
      // .append('Access-Control-Allow-Credentials', 'true');

    if (country==='united_kingdom') {
      country='united kingdom';
      console.log('Cambiamos el pais a: ', country);
    }  
    const url : string = `${this.apiUrl}/universities`   
    return this.http.get<uniFields[]>(url, {headers})
      .pipe(
        map((results) => results.filter(
          (valor) => valor.country.toLowerCase() ===country))
      );
  }

  buscarUniversidadconcreta (nombre: string):Observable<uniFields>{
    const url : string = `${this.apiUrl}/universities/${nombre}`   
    return this.http.get<uniFields>(url)
  }


}


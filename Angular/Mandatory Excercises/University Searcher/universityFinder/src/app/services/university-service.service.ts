import { Injectable } from '@angular/core';
import { uniFields } from '../interfaces/uniFields.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversityServiceService {

  apiUrl: string = 'localhost:4200'

  constructor(private http: HttpClient) { }

  buscarUniversidad(termino:string):Observable<uniFields[]> {
    const url : string = `${this.apiUrl}/universities/${termino}`;
       
    return this.http.get<uniFields[]>(url);

  }
}

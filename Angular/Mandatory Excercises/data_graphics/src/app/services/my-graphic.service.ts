import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { tap , map} from 'rxjs/operators';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class MyGraphicService {

  // URL base para el gráfico
  private basicUrl = 'https://quickchart.io/chart/';
  private width: number = 600;
  private height: number = 180;
  
  private bgColor1: string = "lightyellow";
  private bgColor2: string = "rgba(0,0,135,0.2)";
  
  // Array para almacenar los datos del gráfico 1 (población de países)
  private dataChart1!: number[];
  // Array con datos del gráfico 2 (ventas)
  dataChart2: number[] = [50, 60, 70, 180, 140, 30, 40, 95, 80, 50, 120, 140, 130, 140, 90, 130, 100, 60, 140, 40];
  
  // Variable para controlar la carga de datos
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  // URL de la API para obtener información de los países
  private apiUrl: string = "https://restcountries.com/v3.1";

  // En el eje X del chart1
private countries: string[] = [
  "'Germany'",
  "'Austria'",
  "'Bulgaria'",
  "'Belgium'",
  "'Cyprus'",
  "'Croatia'",
  "'Denmark'",
  "'Slovakia'",
  "'Slovenia'",
  "'Spain'",
  "'Estonia'",
  "'Finland'",
  "'France'",
  "'Greece'",
  "'Hungary'",
  "'Ireland'",
  "'Italy'",
  "'Latvia'",
  "'Lithuania'",
  "'Luxembourg'",
  "'Malta'",
  "'Netherlands'",
  "'Poland'",
  "'Portugal'",
  "'Czechia'",
  "'Romania'",
  "'Sweden'",
];

// En el eje X del chart2
private months: string[] = [
  "'January 2022'",
  "'February 2022'",
  "'March 2022'",
  "'April 2022'",
  "'May 2022'",
  "'June 2022'",
  "'July 2022'",
  "'August 2022'",
  "'September 2022'",
  "'October 2022'",
  "'November 2022'",
  "'December 2022'",
  "'January 2023'",
  "'February 2023'",
  "'March 2023'",
  "'April 2023'",
  "'May 2023'",
  "'June 2023'",
  "'July 2023'",
  "'August 2023'",
];


  constructor(private http: HttpClient) {
    // Ejecuta el método al cargar el componente
    this.prepareDataChart1().subscribe(() => {
      this.loading$.next(false); // Marca al componente first-chart que los datos se han cargado      
    });
  }

  prepareDataChart1(): Observable<void> {
    const observables = this.countries.map((item) => {
      item = item.replace(/^'|'$/g, '');
      return this.takeThat(item);
    });

    return forkJoin(observables).pipe(
      tap((data) => {
        // Procesamos las respuestas para llenar dataChart1 con los datos adecuados
        this.dataChart1 = data.map((valor) => valor[0].population);
      }),
      map(() => {})
    );
  }

  firstChartBuild(): string {
    return `${this.basicUrl}?w=${this.width}&h=${this.height}&bkg=${this.bgColor1}&chart={type:'bar',data:{labels:[${this.countries}],datasets:[{label:'Users',data:[${this.dataChart1}],borderColor:'red'}]}}`;
  }

  secondChartBuild(): string {
    return `${this.basicUrl}?w=${this.width}&h=${this.height}&bkg=${this.bgColor2}&chart={type:'line',data:{labels:[${this.months}],datasets:[{label:'Sales',data:[${this.dataChart2}],fill:false,borderColor:'red'}]}}`;
  }

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  takeThat(termino: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}


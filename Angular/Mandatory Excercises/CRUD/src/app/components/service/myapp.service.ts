import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { Countries, MyTableHeadElements } from 'src/app/interfaces/myrecord.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyappService {
  
  public baseUrl:string= 'http://localhost:3000';
  
  constructor(private http:HttpClient){}

  //get data for the table from json server
  getDataTable():Observable <MyTableHeadElements[]> |undefined {
    return this.http.get<MyTableHeadElements[]>(`${this.baseUrl}/dataTable`);
  }
  //add data to the json server
  addDataTable(data:MyTableHeadElements):Observable <MyTableHeadElements>{
    return this.http.post<MyTableHeadElements>(`${this.baseUrl}/dataTable`,data);   
  }

  //Initialize the countries in the selector sidemenu
  public putCountries(){
    const myCountries= Object.values(Countries) as Countries[];
    return myCountries;
  }   

  //check the field in the sidemenu
  public isValidField(form: FormGroup, field: string):boolean{
    return !!(form.controls[field].errors 
      && form.controls[field].touched);
  }

  //checkpasswords in the sidemenu
  isFieldOneEqualFieldTwo(field1:string, field2:string){
    return ( formGroup: FormGroup): ValidationErrors| null =>{
        const fieldValue1= formGroup.get(field1)?.value;
        const fieldValue2= formGroup.get(field2)?.value;
        if (fieldValue1 !== fieldValue2){
            formGroup.get(field2)?.setErrors({notEqual:true});
            return { notEqual : true}
        }
        formGroup.get(field2)?.setErrors(null);
        return null;
    }
  }
}

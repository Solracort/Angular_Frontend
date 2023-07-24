import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { Countries, MyTableHeadElements } from 'src/app/interfaces/myrecord.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyappService {
  
  public baseUrl:string= 'http://localhost:3000';

  //         <<<<PROPERTIES>>>

  // private variable BehaviorSubject type to watch an reolad the content in table component
    private readonly _reloadTable: BehaviorSubject<boolean> = new BehaviorSubject(false);
    readonly reloadTable$ = this._reloadTable.asObservable();

  // private variable BehaviorSubject type to watch an reolad the form in sidebar component
  private readonly _reloadForm: BehaviorSubject<boolean> = new BehaviorSubject(false);
  readonly reloadForm$ = this._reloadForm.asObservable();  

  private record2edit: MyTableHeadElements ={
    id: 0,
    name: '',
    email: '',
    password:'',
    password2:'',
    confirmation: false,
    country: Countries.España,
    city: ''
  }
  
  //          <<<<<METHODS>>>>>

    constructor(private http:HttpClient){}
  
    // setter reloadTable value
    set reloadTable(value:boolean){this._reloadTable.next(value)};

    // setter reloadForm value
    set reloadForm(value:boolean){this._reloadForm.next(value)};

    // get record to edit

    get record () {return this.record2edit }

  //get Initial data for the table from json server
  getDataTable():Observable <MyTableHeadElements[]> {
    return this.http.get<MyTableHeadElements[]>(`${this.baseUrl}/dataTable`);   
  }
  //add data record to the json server
  addDataTable(data:MyTableHeadElements):Observable <MyTableHeadElements>{
    return this.http.post<MyTableHeadElements>(`${this.baseUrl}/dataTable`,data);   
  }

  //delete data record from json server
  deleteDataTable(id:number):Observable <MyTableHeadElements>{
    console.log('Borrando el registro: ', id);     
    return this.http.delete<MyTableHeadElements>(`${this.baseUrl}/dataTable/${id}`);      
  }
  
  // update record in the json server
  updateRecord(record: MyTableHeadElements): Observable<MyTableHeadElements> {
 
    if (record.id) this.record2edit = {... record}
    
    if(!record.id){
      this.record.id = this.record2edit.id;
      this.record2edit.name = record.name;
      this.record2edit.email =record.email;
      this.record2edit.password = record.password;
      this.record2edit.password2 = record.password2;
      this.record2edit.confirmation= record.confirmation;
      this.record2edit.country= record.country;
      this.record2edit.city = record.city;
    }  
    console.log('record2edit antes del put:', this.record2edit);
    console.log('record antes del put:', record)
    this.reloadForm=true; 
    
    return this.http.put<MyTableHeadElements>(`${this.baseUrl}/dataTable/${this.record2edit.id}`, this.record2edit);
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

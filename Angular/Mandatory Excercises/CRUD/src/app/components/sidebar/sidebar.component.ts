import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyappService } from '../service/myapp.service';
import { Countries, MyTableHeadElements } from 'src/app/interfaces/myrecord.interface';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit{

  public myForm: FormGroup= this.fb.group({
    name:       ['', [Validators.required, Validators.minLength(3)]],
    email:      ['', [Validators.required , Validators.email]],
    
    password:   ['', [Validators.required, Validators.minLength(6)]],
    password2:          ['', [Validators.required, Validators.minLength(6)]],
    confirmation :      [''],
    country:            ['', [Validators.required]],
    city:               ['', [Validators.required]],
    },{
    validators: [
      this.myService.isFieldOneEqualFieldTwo('password','password2'),
    ],    
  });
  public Mode: string ="Crear";
  constructor ( 
                private fb: FormBuilder ,
                private myService: MyappService, 
                private snackbar: MatSnackBar,
              ){}
              
  ngOnInit(): void {
    // watch the service flag to reload the form data
    this.myService.reloadForm$
      .subscribe((trigger)=>{if(trigger){this.showForm(this.myService.record)}
    });
  };

  //We use this method to get the country list in the html's select               
  get countries():  Countries[]{
    return this.myService.putCountries();
  } 
  public isValidField(form: FormGroup, field: string):boolean{
        return this.myService.isValidField(form, field);
  }
  get currentData() : MyTableHeadElements {
    return  this.myForm.value as MyTableHeadElements;    
  }
  
  // Show the editingRecord in form 
  showForm(record: MyTableHeadElements) {
    
    this.myForm.reset(record);
  }

  showSnackbar(message: string): void{
    this.snackbar.open(message, ' done', {
      duration: 2500,
    })
  }
  onSubmit(){
   
    if (this.myForm.invalid) return;


    if (this.myService.record.id === 0) {
      this.myService.addDataTable(this.currentData)
          .subscribe(
            (newdata)=>{
            this.showSnackbar(`${newdata.name} added!`)
            // To reload the table and clean the form
            this.myService.reloadTable = true;
            this.myForm.reset('')
          })
    } else {
      this.Mode = 'Actualizar';
      console.log('Este es el registro que paso desde sidebar para actualizar')
      this.myService.updateRecord(this.currentData)
      .subscribe(
        () => {
          this.showSnackbar(`Record edited and saved!`)
          // To reload the table
          this.myService.reloadTable = true;
          this.myForm.reset('')
        },
      )
    }
  }
}

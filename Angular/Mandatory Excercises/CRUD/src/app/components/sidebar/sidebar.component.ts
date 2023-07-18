import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyappService } from '../service/myapp.service';
import { Countries } from 'src/app/interfaces/myrecord.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  public myForm: FormGroup= this.fb.group({
    name:       ['', [Validators.required, Validators.minLength(3)]],
    email:      ['', [Validators.required , Validators.email]],
    
    password:   ['', [Validators.required, Validators.minLength(6)]],
    password2:  ['', [Validators.required, Validators.minLength(6)]],
    promo :     [''],
    myCountry:  ['', [Validators.required]],
    myCity:     ['', [Validators.required]],
    },{
    validators: [
      this.myService.isFieldOneEqualFieldTwo('password','password2'),
    ],    
  });
  
  constructor ( 
                private fb: FormBuilder ,
                private myService: MyappService, 
                
              ){};
  get countries():  Countries[]{
    return this.myService.putCountries();
  } 
  public isValidField(form: FormGroup, field: string):boolean{
              return this.myService.isValidField(form, field);
  }

  onSubmit(){
    console.log('onSubmit called');
  }
}

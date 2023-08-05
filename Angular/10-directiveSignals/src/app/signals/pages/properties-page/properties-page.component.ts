import { Component, OnDestroy, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent implements OnDestroy{
  
  public counter = signal(10)

  public user = signal<User>({
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  })

  public fullName = computed ( ()=>`${this.user().first_name} ${this.user().last_name}`)

  public userChangedEffect = effect(()=>{
    console.log(`${this.user().first_name} - ${this.counter()}`);

  })


  increaseBy(value:number){
    this.counter.update (current => current + value);
  }

  onFieldUpdated( field: keyof User, value: string){
    
    //      *****FORMA 1 DE HACERLO*****
    // this.user.set({
    //   ...this.user(),
    //   [field] : value, 
    // })

    //      *****FORMA 2 DE HACERLO*****
    // this.user.mutate(current =>{
    //   switch (field){
    //     case 'email':
    //         current.email = value;
    //     break;
    //     case 'first_name':
    //         current.email = value;
    //     break;
    //     case 'last_name':
    //         current.email = value;
    //     break;
    //     case 'id':
    //         current.id = Number(value);
    //     break;
    // }
    // })

    //      *****FORMA 3 DE HACERLO*****

    this.user.update ( current =>{
      return {
        ...current,
        [field]: value
      }
    })

  }

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }

}

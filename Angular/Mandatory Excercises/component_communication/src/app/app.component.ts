import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
 
  parentMessage : string = '';
  inputMessage  : string = '';

  
  constructor(private userService: UserServiceService){ }

  ngOnInit() {
    this.userService.getChildObs$().subscribe((message: string) => {
      this.parentMessage = message;
      console.log('Mensaje recibido en el padre:', message);
    });
  }
  

  changeInputMessage(){
    this.inputMessage = 'PARENT USING INPUT PROPERTY';
    console.log('usando la propiedad input', this.inputMessage)

  }
  onChildEvent(dataChild:string){
    this.parentMessage = dataChild;
    this.inputMessage='';
  }
  onClickServiceParentButton() {
    this.inputMessage = this.userService.parentServiceMessage
  }
  onClickObservableParentButton(){
    this.userService.sendMessageParent("Parent Using Subject");
  }
  ngOnDestroy(){
    this.userService.getChildObs$().complete();
  }
}

import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-mychild',
  templateUrl: './mychild.component.html',
})

export class MychildComponent implements OnChanges {
  
  //We declare de the variables to show the messages
  childMessage : string  = "";
  
  //We define the input and output variables for communication between the components 
  @Input()  message2Child: string ="";
  @Output() message2Parent: EventEmitter<string> = new EventEmitter<string>();
  
  //We need to inject the service to use the methods 
  constructor(private userService: UserServiceService){}
  
  //the first thing is to get subscribe OnInit to the observable message value 
  ngOnInit() {
    this.userService.getParentObs$().subscribe((message: string) => {
      this.childMessage = message;
      console.log('Mensaje recibido en el hijo:', message);
    });
  }
  

  ngOnChanges(changes:SimpleChanges){
    if (changes['message2Child'] ){
        this.childMessage = this.message2Child; 
    }  
  }
  sendChildMessage(){
    this.message2Parent.emit('CHILD USING OUTPUT EVENT');
  }
  onClickServiceChildButton(){
    this.message2Parent.emit(this.userService.childServiceMessage);
  }
  onClickObservableChildButton(){
    this.userService.sendMessageChild("Child Using Subject");
  }
  ngOnDestroy(){
    this.userService.getChildObs$().complete()
  }
}

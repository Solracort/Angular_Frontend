import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-mychild',
  templateUrl: './mychild.component.html',
})

export class MychildComponent implements OnChanges {
  childMessage : string  = "";
  
  @Input() message2Child: string ="";
  @Output() message2Parent: EventEmitter<string> = new EventEmitter<string>();
  
  
  constructor(private userService: UserServiceService){}
  
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
}

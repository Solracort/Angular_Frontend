import { Component, OnInit } from '@angular/core';
import { Countries, MyTableHeadElements } from 'src/app/interfaces/myrecord.interface';
import { MyappService } from '../service/myapp.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit{
  
  displayedColumns: string[] = [ 'name', 'email', 'confirmation', 'country', 'city', 'actions'];

  public dataSource: MyTableHeadElements[] =[]; 
  
  constructor(private myAppService: MyappService){}
  
  ngOnInit(): void {
    this.getRecords();
    // watch the service flag for the data table
    this.myAppService.reloadTable$
      .subscribe((trigger)=>{if(trigger) this.getRecords()})
  }
  getRecords(): void {
    this.myAppService.getDataTable()
      .subscribe(data => {
        this.dataSource = data;
    });
  };
  deleteRecord(id:number) {
    this.myAppService.deleteDataTable(id)
      .subscribe(()=>this.myAppService.reloadTable = true
      );
    
    // this.myAppService.reloadTable = true;  
  }
  editRecord(record:MyTableHeadElements){
    console.log('Este es el registro que paso desde la tabla para actualizar:' , record);
    this.myAppService.updateRecord(record);    
  }
}

import { Component, OnInit } from '@angular/core';
import { Countries, MyTableHeadElements } from 'src/app/interfaces/myrecord.interface';
import { MyappService } from '../service/myapp.service';

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
    this.myAppService.getDataTable();
  }
  

}

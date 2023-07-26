import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { uniFields } from 'src/app/interfaces/uniFields.interface';
import { UniversityServiceService } from 'src/app/services/university-service.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent {
  

}

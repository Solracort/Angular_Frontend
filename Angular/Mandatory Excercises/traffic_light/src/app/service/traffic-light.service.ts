import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficLightService {
  encendido$ : BehaviorSubject<boolean> = new BehaviorSubject(false);
  color$     : BehaviorSubject<string>  = new BehaviorSubject('');
  
  constructor() { }
  
}

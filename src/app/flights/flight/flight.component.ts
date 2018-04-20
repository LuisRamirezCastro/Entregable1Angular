import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector:    'app-flight',
  templateUrl: './flight.component.html',
  styleUrls:  ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  
  @Input() flightparam;

  constructor() { }

  ngOnInit() {
  }
  
  public toogle(){
  	this.flightparam.status = !this.flightparam.status;
  }
}

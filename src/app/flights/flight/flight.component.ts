import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flight } from '../flight.model';

import { FlightsService } from '../flights.service'; 

@Component({
  selector:    'app-flight',
  templateUrl: './flight.component.html',
  styleUrls:  ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  
  // @Input() flightparam;

  @Input() flight : Flight;

  @Output() removeFlight = new EventEmitter<Flight>();
  @Output() editFlight    = new EventEmitter<Flight>();
  
  public isDeleting = false;

  constructor() { }

  ngOnInit() {
  }
  
  public toogle(){
  	this.flight.status = !this.flight.status;
  }

  delete(){
    this.isDeleting = true;
    this.removeFlight.emit(this.flight);
  }

  edit(){
    this.editFlight.emit(this.flight);
  }
}

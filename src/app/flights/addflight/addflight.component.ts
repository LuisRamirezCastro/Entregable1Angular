import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Flight } from '../flight.model'

@Component({
  selector:    'app-flight-add',
  templateUrl: './addflight.component.html',
  styleUrls:  ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

	@Output() addedFlight: EventEmitter<Flight> = new EventEmitter<Flight>();
	
	//
	public newAirline: string = ''
	public newCode: string = ''
	public newDestination: string = ''
	public newDate: string = ''
	//

	constructor() { }
	ngOnInit() { }

	public addFlight(){
		let flight = new Flight();
		flight.airline     = this.newAirline;
		flight.code        = this.newCode;
		flight.destination = this.newDestination;
		flight.date        = this.newDate;

		// Call FlightsService
		this.addedFlight.emit(flight);

		//Clean form
		this.newAirline = '';
		this.newCode = '';
		this.newDestination = '';
		this.newDate = '';
	}

}
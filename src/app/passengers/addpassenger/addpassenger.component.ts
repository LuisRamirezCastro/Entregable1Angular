import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../passenger.model'

@Component({
  selector: 'app-passenger-add',
  templateUrl: './addpassenger.component.html',
  styleUrls: ['./addpassenger.component.css']
})
export class AddpassengerComponent implements OnInit {

  @Output() addedPassenger: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  
  	//
	public newName: string = ''
	public newDestination: string = ''
	//

  constructor() { }

  ngOnInit() {
  }

  	public addPassenger(){
		let passenger = new Passenger();
		passenger.name     = this.newName;
		passenger.destination = this.newDestination;

		// Call FlightsService
		this.addedPassenger.emit(passenger);

		//Clean form
		this.newName = '';
		this.newDestination = '';
	}

}
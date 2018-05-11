import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Flight } from '../flight.model';

import { FlightsService } from '../flights.service'; 


@Component({
  selector:    'app-flight-add',
  templateUrl: './addflight.component.html',
  styleUrls:  ['./addflight.component.css']
})

export class AddflightComponent implements OnInit, OnChanges {
	@Output() addedFlight  = new EventEmitter<any>();
	@Output() editFlight = new EventEmitter<any>();

	@Input() canAdd : boolean = true;

	@Input('selectedFlight') flight : Flight;

	submitted = false;
	requiredText : string = 'producto';
	isEditing = false;

	onSubmit(flightForm) {
		if(this.isEditing){
			console.log('FE - Edit Flight - Component');
			this.editFlight.emit({'flight':this.flight,'form':flightForm});
			this.isEditing = false;
		} else {
			console.log('FE - Add Flight - Component');
			this.addedFlight.emit(this.flight);
		}
		this.submitted = true; 
	}

	constructor() {

		console.log('constructor', this.flight);
	}

	ngOnInit() {
		this.flight = new Flight();
		console.log('ngOnInit', this.flight);
	}

	ngOnChanges(changes){
		console.log('changes',changes)
		console.log('ngOnChanges changes.flight', changes.flight);
		if(changes.flight && changes.flight.currentValue && changes.flight.currentValue._id){
			console.log('is editing');
			this.isEditing = true;
		}
	}

	newFlight(){
		this.submitted = false; 
		this.isEditing = false;
		this.flight = new Flight();
	}

}

// export class AddflightComponent implements OnInit {

// 	// addedFlight es enviado hacia el componente PADRE
// 	@Output() addedFlight: EventEmitter<Flight> = new EventEmitter<Flight>();

// 	@Output() editedFlight: EventEmitter<Flight> = new EventEmitter<Flight>();

// 	// selectedFlight es enviado desde el componente PADRE
// 	@Input('selectedFlight') flight : Flight = new Flight();
	
// 	// Variables de control
// 	submitted = false;
// 	requiredText : string = 'producto';
// 	isEditing = false;
	
// 	//
// 	public newAirline: string = ''
// 	public newCode: string = ''
// 	public newDestination: string = ''
// 	public newDate: string = ''
// 	//

// 	constructor() { }
// 	ngOnInit() { }

// 	public addFlight(){
// 		let flight = new Flight();
// 		flight.airline     = this.newAirline;
// 		flight.code        = this.newCode;
// 		flight.destination = this.newDestination;
// 		flight.date        = this.newDate;

// 		// Call FlightsService
// 		this.addedFlight.emit(flight);

// 		//Clean form
// 		this.newAirline = '';
// 		this.newCode = '';
// 		this.newDestination = '';
// 		this.newDate = '';
// 	}

// }

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// CODIGO FUNCIONAL
// CODIGO FUNCIONAL
// CODIGO FUNCIONAL

// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { Flight } from '../flight.model'

// @Component({
//   selector:    'app-flight-add',
//   templateUrl: './addflight.component.html',
//   styleUrls:  ['./addflight.component.css']
// })
// export class AddflightComponent implements OnInit {

// 	// addedFlight es enviado hacia el componente PADRE
// 	@Output() addedFlight: EventEmitter<Flight> = new EventEmitter<Flight>();
	
// 	//
// 	public newAirline: string = ''
// 	public newCode: string = ''
// 	public newDestination: string = ''
// 	public newDate: string = ''
// 	//

// 	constructor() { }
// 	ngOnInit() { }

// 	public addFlight(){
// 		let flight = new Flight();
// 		flight.airline     = this.newAirline;
// 		flight.code        = this.newCode;
// 		flight.destination = this.newDestination;
// 		flight.date        = this.newDate;

// 		// Call FlightsService
// 		this.addedFlight.emit(flight);

// 		//Clean form
// 		this.newAirline = '';
// 		this.newCode = '';
// 		this.newDestination = '';
// 		this.newDate = '';
// 	}

// }
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Passenger } from '../passenger.model'

import { patternValidator } from '../../shared/pattern-validator';

// import { patternValidator } from '../../shared/pattern-validator';


@Component({
  selector:    'app-passenger-add',
  templateUrl: './addpassenger.component.html',
  styleUrls:  ['./addpassenger.component.css']
})
export class AddpassengerComponent implements OnInit {

  	// @Output() addedPassenger: EventEmitter<Passenger> = new EventEmitter<Passenger>();
	@Output() addedPassenger = new EventEmitter<any>();
	@Output() editedPassenger = new EventEmitter<any>();
	
	@Input() canAdd : boolean = true;
	@Input('selectedPassenger') passenger: Passenger = new Passenger();
	
	public submitted: boolean = false;
	public isEditing: boolean = false;
 	public passengerForm: FormGroup;
  	


  	//
	public newName: string = ''
	public newDestination: string = ''
	//

	constructor(private formBuilder: FormBuilder) { }

 	ngOnInit() {
  		this.createForm();
  	}

	createForm() {
		this.passengerForm = this.formBuilder.group({
			_id:  new FormControl(undefined),
			name: new FormControl('', 
				[Validators.required]),
			destination: new FormControl('', [
				Validators.required, 
				Validators.minLength(4), 
				Validators.maxLength(25)]),
			flightcode: new FormControl('', 
				[Validators.required,
				Validators.minLength(3), 
				Validators.maxLength(6),
				patternValidator(
					/^[A-Z]{2,3}\d{1,3}$/
				)])
		});
	}

	onSubmit() {

		let passenger = JSON.parse(JSON.stringify(this.passengerForm.value));

		if(this.isEditing){
			this.editedPassenger.emit({passenger:this.passengerForm.value,form:this.passengerForm});
			this.isEditing = false;
		} else {
			this.addedPassenger.emit(this.passengerForm.value);

			// this.addedPassenger.emit({passenger:this.passengerForm.value,form:this.passengerForm});
		}
		this.submitted = true; 
	}

	ngOnChanges(changes){
		console.log('changes',changes)
		if(changes.passenger && changes.passenger.currentValue._id){
			console.log('is editing');
			if(changes.passenger.currentValue.__v !== undefined) {
				delete changes.passenger.currentValue.__v;
			}
			this.passengerForm.setValue(changes.passenger.currentValue);
			this.isEditing = true;
		}
	}

	revert(){
		this.passengerForm.reset();
		this.submitted = false;
		this.isEditing = false;
	}

 //  	public addPassenger(){
	// 	let passenger = new Passenger();
	// 	passenger.name     = this.newName;
	// 	passenger.destination = this.newDestination;

	// 	// Call FlightsService
	// 	this.addedPassenger.emit(passenger);

	// 	//Clean form
	// 	this.newName = '';
	// 	this.newDestination = '';
	// }

}
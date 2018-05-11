import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Passenger } from '../passenger.model';
import { PassengersService } from '../passengers.service'; 

@Component({
  selector:    'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls:  ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  @Input() passenger : Passenger;
  @Output() deletePassenger = new EventEmitter<Passenger>();
  @Output() editedPassenger   = new EventEmitter<Passenger>();

  public isDeleting = false;

  constructor(private passengersService:PassengersService) { }

  ngOnInit() {
  }

  // public toogle(){
  //   this.passenger.active = !this.passenger.active;
  // }

  delete(){
    this.isDeleting = true;
    this.deletePassenger.emit(this.passenger);
  }

  edit(){
    this.editedPassenger.emit(this.passenger);
  }
}

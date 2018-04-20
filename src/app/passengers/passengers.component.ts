import { Component, OnInit } from '@angular/core';

// Se importan el servicio y la clase model que se utilliza dentro del servicio
import { PassengersService } from './passengers.service'; 
import { Passenger } from './passenger.model';

@Component({
  selector:    'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls:  ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  // Se inician los servicios desde el constructor del componente
  constructor(private passengersService:PassengersService) { }

  ngOnInit() {}

  public addedPassenger(passenger:Passenger){
	this.passengersService.addPassenger(passenger);
  }
}
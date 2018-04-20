import { Component, OnInit } from '@angular/core';

// Se importan el servicio y la clase model que se utilliza dentro del servicio
import { FlightsService } from './flights.service'; 
import { Flight } from './flight.model';

@Component({
  selector:    'app-flights',
  templateUrl: './flights.component.html',
  styleUrls:  ['./flights.component.css']
})
export class FlightsComponent implements OnInit {


  // Se inician los servicios desde el constructor del componente
  constructor(private flightsService:FlightsService) { }

  ngOnInit() {
  }
  
 // Added Logic
  public addedFlight(flight:Flight){
		this.flightsService.addFlight(flight);
	}

}

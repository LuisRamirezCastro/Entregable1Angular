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
  public flights : Flight[];

  public selectedFlight : Flight = new Flight;
  public loading : boolean = false;

  // Se inician los servicios desde el constructor del componente
  constructor(private flightsService:FlightsService) { }

  ngOnInit() {
    this.getFlights();
  }
  
 // Added Logic
  public addedFlight(flight:Flight){
    console.log('FE - Adding Flight: ' + flight);
		this.flightsService.addFlight(flight);
    this.getFlights();
	}

  public getFlights(){
     console.log('Get Flights - FE Service');
    this.flightsService.getFlights()
    // .subscribe(data => {
    //   console.log('flights', data);
    // }, (error) => {
    //   console.log('error', error);
    // });
      .then(data => {
        console.log(data);
       this.flights = data.flights;
      })
      .catch(error => {
       console.log('error',error);
      });
  }

  public editFlight(flight){
    console.log('edit',flight);
    this.selectedFlight = Object.assign({}, flight);
  }

  public editFlightSave(flight){
    this.flightsService.editFlight(flight.flight)
      .then(data => {
        this.getFlights();
      })
      .catch(error => {
        console.log('error',error);
      });
  }

  // public removeFlight(flight){
  //   console.log('remove',flight);
  //   this.selectedFlight = Object.assign({}, flight);
  // }  

  public removeFlight(flight){
    this.flightsService.removeFlight(flight)
      .then(data => {
        this.getFlights();
      })
      .catch(error => {
        console.log('error',error);
      });
  }
}

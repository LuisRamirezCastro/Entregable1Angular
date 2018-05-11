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
  public passengers : Passenger[];
  public selectedPassenger : Passenger = new Passenger();
  public loading : boolean = false;

  // Se inician los servicios desde el constructor del componente
  
  constructor(private passengersService:PassengersService) { }

  ngOnInit() {
    this.getPassengers();
  }

  // Functions to ADD Passenger
  // Functions to ADD Passenger
  // Functions to ADD Passenger
  
  // Old call
  public addedPassenger(passenger:Passenger){
    console.log('FE - Adding Passenger: ' + passenger);
	 this.passengersService.addPassenger(passenger);
	 this.getPassengers();
  }

  // New call
  // public addedPassenger(passenger:any){
  //   this.loading = true;
  //   delete passenger.passenger._id;
  //   this.passengersService.addPassenger(passenger.passenger)
  //     .then(data => {
  //       console.log('Add Passenger');
  //       passenger.form.reset();
  //       this.loading = false;
  //       this.getPassengers();
  //     })
  //     .catch(error => {
  //       console.log('error',error);
  //       this.loading = false;
  //       alert('Passenger already exists. Add another');
  //     });
  // }

  // public editedPassenger(passenger:Passenger){}

  public editedPassenger(passenger){
    console.log('Edit passenger',passenger);
    this.selectedPassenger = Object.assign({}, passenger);
  }

  public editedPassengerSave(passenger){
    this.passengersService.editPassenger(passenger.passenger)
      .then(data => {
        passenger.form.reset();
        this.getPassengers();
      })
      .catch(error => {
        console.log('error',error);
      });
  }

  public deletePassenger(passenger){
    this.passengersService.removePassenger(passenger)
      .then(data => {
        this.getPassengers();
      })
      .catch(error => {
        console.log('error',error);
      });
  }

  // public getPassengers(){
  //   this.passengersService.obtenerUsuarios().subscribe((data) => {
  //       console.log('data',data);
  //       this.passengers = data.user;
  //     });
  // }



  public getPassengers(){
    console.log('Get Passengers - FE Service');
    this.passengersService.getPassengers()
    // .subscribe(data => {
    //   console.log('flights', data);
    // }, (error) => {
    //   console.log('error', error);
    // });
      .then(data => {
        console.log(data);
       this.passengers = data.passengers;
      })
      .catch(error => {
       console.log('error',error);
      });
  }



}
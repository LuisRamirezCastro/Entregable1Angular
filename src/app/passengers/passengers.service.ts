import { Injectable } from '@angular/core';
// Importa el modelo a utilizar por el servicio
import { Passenger } from './passenger.model';
import { DataService } from '../shared/data.service';


@Injectable()
export class PassengersService {  
  constructor(private dataService:DataService) { }

  public getPassengers(){
    console.log('--- New Transaction ----------------------------------------------');
    console.log('FE - Getting list of passengers');
    return this.dataService.get('/api/passengers');
  }

  public addPassenger(passenger:Passenger){
    console.log('--- New Transaction ----------------------------------------------');
    console.log('FE - Adding a passenger');
    return this.dataService.post('/api/passengers',{'passenger':passenger});
  }

  public removePassenger(passenger:Passenger){
    console.log('--- New Transaction ----------------------------------------------');
    console.log('FE - Removing a passenger');
    return this.dataService.delete('/api/passengers/'+passenger._id);
  }

  public editPassenger(passenger:Passenger){
    console.log('--- New Transaction ----------------------------------------------');
    console.log('FE - Editing a passenger');
    return this.dataService.put('/api/passengers/'+passenger._id,{'passenger':passenger});
  }
}


// @Injectable()
// export class PassengersService {
  

//   public passengers: Passenger[] = [
//     {
//       name: 'Luis Ramirez',
//       destination: 'Amsterdam',
//       active: true
//     },
//     {
//       name: 'Naty Chavarria',
//       destination: 'Amsterdam',
//       active: true
//     },
//     {
//       name: 'Andres Espinoza',
//       destination: 'Cancun',
//       active: true
//     },
//     {
//       name: 'Andrea Bogantes',
//       destination: 'Bogota',
//       active: true
//     },
//     {
//       name: 'Ivan Carballo',
//       destination: 'Cancun',
//       active: true
//     },
//     {
//       name: 'Efrain Alvarez',
//       destination: 'Cancun',
//       active: true
//     },
//     {
//       name: 'Ernesto Viajero',
//       destination: 'Cancun',
//       active: true
//     },
//     {
//       name: 'Phillip Cardigan',
//       destination: 'Amsterdam',
//       active: true
//     },
//     {
//       name: 'Josue Bonilla',
//       destination: 'Amsterdam',
//       active: true
//     },
//     {
//       name: 'Antonio Fallas',
//       destination: 'Bogota',
//       active: true
//     },
//     {
//       name: 'Federico Rojas',
//       destination: 'Amsterdam',
//       active: true
//     },
//     {
//       name: 'Luis Alvarado',
//       destination: 'Amsterdam',
//       active: true
//     },
//     {
//       name: 'Byron Cordero',
//       destination: 'Cancun',
//       active: true
//     },
//     {
//       name: 'Maicol Phelps',
//       destination: 'Amsterdam',
//       active: true
//     },
//     {
//       name: 'David Solano',
//       destination: 'New York',
//       active: true
//     },
//     {
//       name: 'Vanessa Hernandez',
//       destination: 'Amsterdam',
//       active: true
//     },
//     {
//       name: 'Casimiro Hoyos',
//       destination: 'Mexico',
//       active: true
//     },
//     {
//       name: 'Maria France',
//       destination: 'Paris',
//       active: true
//     },
//     {
//       name: 'Natalia Ramirez',
//       destination: 'Paris',
//       active: true
//     },
//     {
//       name: 'Estefany Ramirez',
//       destination: 'Amsterdam',
//       active: true
//     },
//     {
//       name: 'Miguel Gomez',
//       destination: 'Bogota',
//       active: true
//     },
//     {
//       name: 'Carlos Jones',
//       destination: 'Amsterdam',
//       active: true
//     },
//     {
//       name: 'Luis Fallas',
//       destination: 'Cancun',
//       active: true
//     },
//     {
//       name: 'Jimmy Alfaro',
//       destination: 'Bogota',
//       active: true
//     },
//     {
//       name: 'Geoffer Cruz',
//       destination: 'Bolivia',
//       active: true
//     },
//     {
//       name: 'Tomas Brenes',
//       destination: 'New York',
//       active: true
//     }
//   ];

  
//   constructor() { }

//   public getPassengers(){
//     return this.passengers;
//   }
//   // Added Logic

//   public addPassenger(newPassenger:Passenger){
//     this.passengers.push(newPassenger);
//   }

//   public removePassenger(passenger:Passenger){
//     this.passengers = this.passengers.filter(item => item !== passenger);
//   }

//   public editPassenger(){

//   }

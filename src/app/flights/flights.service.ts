import { Injectable } from '@angular/core';
// Importa el modelo a utilizar por el servicio
import { Flight } from './flight.model'
import { DataService } from '../shared/data.service';

@Injectable()
export class FlightsService {
  
  constructor(private dataService:DataService) { }

  public getFlights(){
    console.log('--- New Transaction ----------------------------------------------');
    console.log('FE - Getting Flights');
    return this.dataService.get('/api/flights');
  }

  public addFlight(flight:Flight){
    console.log('--- New Transaction ----------------------------------------------');
    console.log('FE - Adding Flight');
    return this.dataService.post('/api/flights',{'flight':flight});
  }

  public removeFlight(flight:Flight){
    console.log('--- New Transaction ----------------------------------------------');
    console.log('FE - Removing Flight');
    return this.dataService.delete('/api/flights/'+flight._id);
  }

  public editFlight(flight:Flight){
    console.log('--- New Transaction ----------------------------------------------');
    console.log('FE - Editing Flights');
    return this.dataService.put('/api/flights/'+flight._id,{'flight':flight});
  }
}


// @Injectable()
// export class FlightsService {
  

//   public flights: Flight[] = [
//     {
//       airline: 'Volaris',
//       code: 'V01',
//       destination: 'Cancun',          
//       date: '19/04/2018',
//       status: true,
//       passengers: null  
//     },
//     {
//       airline: 'KLM',
//       code: 'KLM01',
//       destination: 'Amsterdam',          
//       date: '19/04/2018',
//       status: true,
//       passengers: null  
//     },
//     {
//       airline: 'Avianca',
//       code: 'AV01',
//       destination: 'Bogota',          
//       date: '19/04/2018',
//       status: true,
//       passengers: null  
//     },
//     {
//       airline: 'American Airlines',
//       code: 'AA105',
//       destination: 'Miami',          
//       date: '19/04/2018',
//       status: true,
//       passengers: null  
//     },
//     {
//       airline: 'British Airways',
//       code: 'BA282',
//       destination: 'Londres',          
//       date: '19/04/2018',
//       status: true,
//       passengers: null  
//     },
//     {
//       airline: 'Delta Airlines',
//       code: 'DA333',
//       destination: 'Atlanta',          
//       date: '19/04/2018',
//       status: true,
//       passengers: null  
//     },
//     {
//       airline: 'Emirates',
//       code: 'EM34',
//       destination: 'Abu Dhabi',          
//       date: '19/04/2018',
//       status: true,
//       passengers: null  
//     },
//     {
//       airline: 'Lacsa',
//       code: 'LA00',
//       destination: 'Denver',          
//       date: '19/04/2018',
//       status: true,
//       passengers: null  
//     },
//     {
//       airline: 'Latam',
//       code: 'LA05',
//       destination: 'Santiago',          
//       date: '19/04/2018',
//       status: true,
//       passengers: null  
//     },
//     {
//       airline: 'Malaysia Airlines',
//       code: 'MA24',
//       destination: 'Kuala Lumpur',          
//       date: '19/04/2018',
//       status: true,
//       passengers: null  
//     },
//     {
//       airline: 'Qantas',
//       code: 'QA11',
//       destination: 'Brisbane',          
//       date: '19/04/2018',
//       status: true,
//       passengers: null  
//     },
//     {
//       airline: 'United Airlines',
//       code: 'UA45',
//       destination: 'Houston',          
//       date: '19/04/2018',
//       status: true,
//       passengers: null  
//     },
//     {
//       airline: 'Air Canada',
//       code: 'AC225',
//       destination: 'Toronto',          
//       date: '19/04/2018',
//       status: true,
//       passengers: null  
//     }
//   ];


//   constructor() {}

//   public getFlights(){
//     return this.flights;
//   }

//   // Added Logic

//   public addFlight(newFlight:Flight){
//     this.flights.push(newFlight);
//   }

//   public removeFlight(flight:Flight){
//     this.flights = this.flights.filter(item => item !== flight);
//   }

//   public editProduct(){

//   }
// }
import { Passenger } from '../passengers/passenger.model'


export class Flight {
  
  public _id: string = undefined;

  public airline: string;
  public code: string;

  public destination: string;
  public date: string;

  public status: boolean;

  // public passengers: Passenger[];  

  constructor(){
  }
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Routing
import {AppRoutingModule} from './app-routing.module';

// Application Components
import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { FlightsComponent } from './flights/flights.component';
import { FlightComponent } from './flights/flight/flight.component';
import { AddflightComponent } from './flights/addflight/addflight.component';
//import { FlightComponent } from './flights/flight/flight.component';

import { PassengersComponent } from './passengers/passengers.component';
import { PassengerComponent } from './passengers/passenger/passenger.component';
import { AddpassengerComponent } from './passengers/addpassenger/addpassenger.component';


// Imported Services
import { PassengersService } from './passengers/passengers.service';
import { FlightsService } from './flights/flights.service';




@NgModule({
  declarations: [
    AppComponent,
    
    AboutComponent,
    HomeComponent,
    NavigationComponent,
    // Flights
    // Flights
    FlightsComponent,
    FlightComponent,
    AddflightComponent,
    // Passengers
    // Passengers
    PassengersComponent,
    PassengerComponent,
    AddpassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PassengersService,
    FlightsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

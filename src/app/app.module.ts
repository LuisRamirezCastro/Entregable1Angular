import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';


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
import { AuthService } from './shared/auth.service';
import { DataService } from './shared/data.service';






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
    FormsModule,
    HttpModule,
    ReactiveFormsModule 
  ],
  providers: [
    PassengersService,
    FlightsService,
    AuthService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

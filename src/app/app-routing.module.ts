import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PassengersComponent } from './passengers/passengers.component';
import { FlightsComponent } from './flights/flights.component';


// Arreglo con los diferentes componentes disponibles
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },    
    {
        path: 'home',
        component: HomeComponent
    },    
    {
        path: 'passengers',
        component: PassengersComponent
    },    
    {
        path: 'flights',
        component: FlightsComponent
    },  
    {
        path: 'about',
        component: AboutComponent
    },
    { 
        path: '**', 
        redirectTo: ''
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// { useHash: true }
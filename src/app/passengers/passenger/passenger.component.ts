import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector:    'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls:  ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  @Input() passengerparam;

  constructor() { }

  ngOnInit() {
  }

    public toogle(){
  	this.passengerparam.active = !this.passengerparam.active;
  }

}

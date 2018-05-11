webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Yo soy: {{Nombre}}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.Nombre = "About";
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__passengers_passengers_component__ = __webpack_require__("../../../../../src/app/passengers/passengers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flights_flights_component__ = __webpack_require__("../../../../../src/app/flights/flights.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Arreglo con los diferentes componentes disponibles
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'passengers',
        component: __WEBPACK_IMPORTED_MODULE_4__passengers_passengers_component__["a" /* PassengersComponent */]
    },
    {
        path: 'flights',
        component: __WEBPACK_IMPORTED_MODULE_5__flights_flights_component__["a" /* FlightsComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

// { useHash: true } 


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <app-navigation></app-navigation>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__flights_flights_component__ = __webpack_require__("../../../../../src/app/flights/flights.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__flights_flight_flight_component__ = __webpack_require__("../../../../../src/app/flights/flight/flight.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__flights_addflight_addflight_component__ = __webpack_require__("../../../../../src/app/flights/addflight/addflight.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__passengers_passengers_component__ = __webpack_require__("../../../../../src/app/passengers/passengers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__passengers_passenger_passenger_component__ = __webpack_require__("../../../../../src/app/passengers/passenger/passenger.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__passengers_addpassenger_addpassenger_component__ = __webpack_require__("../../../../../src/app/passengers/addpassenger/addpassenger.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__passengers_passengers_service__ = __webpack_require__("../../../../../src/app/passengers/passengers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__flights_flights_service__ = __webpack_require__("../../../../../src/app/flights/flights.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Routing

// Application Components







//import { FlightComponent } from './flights/flight/flight.component';



// Imported Services




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__["a" /* NavigationComponent */],
                // Flights
                // Flights
                __WEBPACK_IMPORTED_MODULE_9__flights_flights_component__["a" /* FlightsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__flights_flight_flight_component__["a" /* FlightComponent */],
                __WEBPACK_IMPORTED_MODULE_11__flights_addflight_addflight_component__["a" /* AddflightComponent */],
                // Passengers
                // Passengers
                __WEBPACK_IMPORTED_MODULE_12__passengers_passengers_component__["a" /* PassengersComponent */],
                __WEBPACK_IMPORTED_MODULE_13__passengers_passenger_passenger_component__["a" /* PassengerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__passengers_addpassenger_addpassenger_component__["a" /* AddpassengerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__passengers_passengers_service__["a" /* PassengersService */],
                __WEBPACK_IMPORTED_MODULE_16__flights_flights_service__["a" /* FlightsService */],
                __WEBPACK_IMPORTED_MODULE_17__shared_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_18__shared_data_service__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/flights/addflight/addflight.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n\twidth: 290px;\n}\n\nlabel {\n\twidth: 90px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/flights/addflight/addflight.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(flightForm)\" #flightForm=\"ngForm\">\n\n\t<!-- Label / Textbox para 'Airline' -->\n\t<!-- Label / Textbox para 'Airline' -->\n\t<!-- Label / Textbox para 'Airline' -->\n\n\n<!--   \n  Flight Model\n\n  public airline: string;\n  public code: string;\n  public destination: string;\n  public date: string;\n\n -->\n\n\t<div class=\"form-group\">\n\t\t<label for=\"airline\">Airline:</label>\n\t\t<input type=\"text\" class=\"form-control\" id=\"airline\"\n\t\trequired [(ngModel)]=\"flight.airline\" name=\"airline\" #airline=\"ngModel\">\n\t\t<!-- required [text-contains-validator]=\"requiredText\" [(ngModel)]=\"flight.airline\" name=\"airline\" --> <!-- #airline=\"ngModel\"> -->\n\n\t\t\n\t\t<!-- Validaciones del texto -->\n\t\t<!-- Validaciones del texto -->\n\n\t\t<div [hidden]=\"airline.valid || airline.pristine\" class=\"alert alert-danger\">\n\t\t\tAirline is required\n\t\t</div>\t\n\t</div>\n\n\t<!-- Label / Textbox para 'Code' -->\n\t<!-- Label / Textbox para 'Code' -->\n\t<!-- Label / Textbox para 'Code' -->\n\n\t<div class=\"form-group\">\n\t\t<label for=\"code\">Code:</label>\n\t\t<input type=\"text\" class=\"form-control\" id=\"code\" name=\"code\" [(ngModel)]=\"flight.code\" #code=\"ngModel\" required pattern=\"^[A-Z]{2,3}\\d{1,3}$\">\n\t\t\t\t\n\t\t<!-- Validaciones del texto -->\n\t\t<!-- Validaciones del texto -->\n\n\t\t<div [hidden]=\"code.valid || code.pristine\" class=\"alert alert-danger\" *ngIf=\"code.errors && code.errors.required\">\n\t\t\tCode is required\n\t\t</div>\n\t\t<div [hidden]=\"code.valid || code.pristine\" class=\"alert alert-danger\" *ngIf=\"code.errors && code.errors.pattern\">\n\t\t\tFlight Code format must use 2-3 upper case letters [A-Z] followed by 1-3 numbers [0-9]\n\t\t</div>\n\t</div>\n\n\t<!-- Label / Textbox para 'Destination' -->\n\t<!-- Label / Textbox para 'Destination' -->\n\t<!-- Label / Textbox para 'Destination' -->\n\n\t<div class=\"form-group\">\n\t\t<label for=\"destination\">Destination:</label>\n\t\t<input type=\"text\" class=\"form-control\" id=\"destination\"\n\t\t[(ngModel)]=\"flight.destination\" name=\"destination\" #destination=\"ngModel\" required>\n\t\t\n\t\t<!-- Validaciones del texto -->\n\t\t<!-- Validaciones del texto -->\n\n\t\t<div [hidden]=\"destination.valid || destination.pristine\" class=\"alert alert-danger\">\n\t\t\tDestination is required\n\t\t</div>\n\t</div>\n\n\t<!-- Label / Textbox para 'Date' -->\n\t<!-- Label / Textbox para 'Date' -->\n\t<!-- Label / Textbox para 'Date' -->\n\n\t<div class=\"form-group\">\n\t\t<label for=\"date\">Date:</label>\n\t\t<input type=\"text\" class=\"form-control\" id=\"date\"\n\t\t[(ngModel)]=\"flight.date\" name=\"date\" #date=\"ngModel\" required>\n\n\t\t<!-- Validaciones del texto -->\n\t\t<!-- Validaciones del texto -->\n\n\t\t<div [hidden]=\"date.valid || date.pristine\" class=\"alert alert-danger\">\n\t\t\tDate is required\n\t\t</div>\n\t</div>\n\n\t<button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!flightForm.form.valid || !canAdd\">\n\t\t<span *ngIf=\"!isEditing\">Agregar</span>\n\t\t<span *ngIf=\"isEditing\">Editar</span>\n\t</button>\n\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"newFlight(); flightForm.reset()\">Revert</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/flights/addflight/addflight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddflightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flight_model__ = __webpack_require__("../../../../../src/app/flights/flight.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddflightComponent = /** @class */ (function () {
    function AddflightComponent() {
        this.addedFlight = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editFlight = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.canAdd = true;
        this.submitted = false;
        this.requiredText = 'producto';
        this.isEditing = false;
        console.log('constructor', this.flight);
    }
    AddflightComponent.prototype.onSubmit = function (flightForm) {
        if (this.isEditing) {
            console.log('FE - Edit Flight - Component');
            this.editFlight.emit({ 'flight': this.flight, 'form': flightForm });
            this.isEditing = false;
        }
        else {
            console.log('FE - Add Flight - Component');
            this.addedFlight.emit(this.flight);
        }
        this.submitted = true;
    };
    AddflightComponent.prototype.ngOnInit = function () {
        this.flight = new __WEBPACK_IMPORTED_MODULE_1__flight_model__["a" /* Flight */]();
        console.log('ngOnInit', this.flight);
    };
    AddflightComponent.prototype.ngOnChanges = function (changes) {
        console.log('changes', changes);
        console.log('ngOnChanges changes.flight', changes.flight);
        if (changes.flight && changes.flight.currentValue && changes.flight.currentValue._id) {
            console.log('is editing');
            this.isEditing = true;
        }
    };
    AddflightComponent.prototype.newFlight = function () {
        this.submitted = false;
        this.isEditing = false;
        this.flight = new __WEBPACK_IMPORTED_MODULE_1__flight_model__["a" /* Flight */]();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddflightComponent.prototype, "addedFlight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddflightComponent.prototype, "editFlight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AddflightComponent.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('selectedFlight'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__flight_model__["a" /* Flight */])
    ], AddflightComponent.prototype, "flight", void 0);
    AddflightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flight-add',
            template: __webpack_require__("../../../../../src/app/flights/addflight/addflight.component.html"),
            styles: [__webpack_require__("../../../../../src/app/flights/addflight/addflight.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddflightComponent);
    return AddflightComponent;
}());

// export class AddflightComponent implements OnInit {
// 	// addedFlight es enviado hacia el componente PADRE
// 	@Output() addedFlight: EventEmitter<Flight> = new EventEmitter<Flight>();
// 	@Output() editedFlight: EventEmitter<Flight> = new EventEmitter<Flight>();
// 	// selectedFlight es enviado desde el componente PADRE
// 	@Input('selectedFlight') flight : Flight = new Flight();
// 	// Variables de control
// 	submitted = false;
// 	requiredText : string = 'producto';
// 	isEditing = false;
// 	//
// 	public newAirline: string = ''
// 	public newCode: string = ''
// 	public newDestination: string = ''
// 	public newDate: string = ''
// 	//
// 	constructor() { }
// 	ngOnInit() { }
// 	public addFlight(){
// 		let flight = new Flight();
// 		flight.airline     = this.newAirline;
// 		flight.code        = this.newCode;
// 		flight.destination = this.newDestination;
// 		flight.date        = this.newDate;
// 		// Call FlightsService
// 		this.addedFlight.emit(flight);
// 		//Clean form
// 		this.newAirline = '';
// 		this.newCode = '';
// 		this.newDestination = '';
// 		this.newDate = '';
// 	}
// }
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// CODIGO FUNCIONAL
// CODIGO FUNCIONAL
// CODIGO FUNCIONAL
// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { Flight } from '../flight.model'
// @Component({
//   selector:    'app-flight-add',
//   templateUrl: './addflight.component.html',
//   styleUrls:  ['./addflight.component.css']
// })
// export class AddflightComponent implements OnInit {
// 	// addedFlight es enviado hacia el componente PADRE
// 	@Output() addedFlight: EventEmitter<Flight> = new EventEmitter<Flight>();
// 	//
// 	public newAirline: string = ''
// 	public newCode: string = ''
// 	public newDestination: string = ''
// 	public newDate: string = ''
// 	//
// 	constructor() { }
// 	ngOnInit() { }
// 	public addFlight(){
// 		let flight = new Flight();
// 		flight.airline     = this.newAirline;
// 		flight.code        = this.newCode;
// 		flight.destination = this.newDestination;
// 		flight.date        = this.newDate;
// 		// Call FlightsService
// 		this.addedFlight.emit(flight);
// 		//Clean form
// 		this.newAirline = '';
// 		this.newCode = '';
// 		this.newDestination = '';
// 		this.newDate = '';
// 	}
// } 


/***/ }),

/***/ "../../../../../src/app/flights/flight.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flight; });
var Flight = /** @class */ (function () {
    // public passengers: Passenger[];  
    function Flight() {
        this._id = undefined;
    }
    return Flight;
}());



/***/ }),

/***/ "../../../../../src/app/flights/flight/flight.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active { \n    color: red;\n}\n\n.flightdetails{\n\tpadding: 10px 0 10px 0;\n\n}\n\n.airlinelogo {\n  -o-object-fit: cover;\n     object-fit: cover;  \n  max-width: 100px;\n  max-height: 100px;\n  float: left;\n}\n\n.airlinedetails\n{  \n  height: 120px;\n  width: 280px;\n  float: left;\n  padding: 0px 0px 10px 20px;\n}\n\n.actions .text-center {\n\tmargin-bottom: 5px;\n}\n\n.actions .text-center button{\n\twidth: 85px;\n};", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/flights/flight/flight.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"flightdetails\" [class.active]=\"flightparam.status\" (click)=\"toogle()\">\n-->\n\n<div class=\"flightdetails\">\n  <div>\n  \t<img class=\"airlinelogo\" src=\"/assets/images/logos/{{flight.airline}}.gif\" alt=\"{{flight.airline}} Logo\"/>\n  </div>\n  <div class=\"airlinedetails\">\n  \t  Airline: {{flight.airline}}\n\t  <br>\n\t  Code: {{flight.code}}  \n\t  <br>\n\t  Destination: {{flight.destination}}\n\t  <br>\n\t  Date: {{flight.date}}\n\t  <br>\n  </div>\n  <div class=\"col-3 actions\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 text-center\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"edit()\">Editar</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 text-center\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">\n\t\t\t\t\t<span *ngIf=\"isDeleting\">...</span>\n\t\t\t\t\t<span *ngIf=\"!isDeleting\">Eliminar</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>  \t\n</div>\n\n<!-- \n<div class=\"row\">\n\t<div class=\"col-9\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-4\">Nombre: </div><div class=\"col-8\"> {{producto.nombre}}</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-4\">Precio: </div><div class=\"col-8\"> {{producto.precio}}</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-4\">Descripcion: </div><div class=\"col-8\"> {{producto.descripcion}}</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-4\">Marca: </div><div class=\"col-8\"> {{producto.marca}}</div>\n\t\t</div>\n\t</div>\n\t\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/flights/flight/flight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flight_model__ = __webpack_require__("../../../../../src/app/flights/flight.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlightComponent = /** @class */ (function () {
    function FlightComponent() {
        this.removeFlight = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editFlight = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isDeleting = false;
    }
    FlightComponent.prototype.ngOnInit = function () {
    };
    FlightComponent.prototype.toogle = function () {
        this.flight.status = !this.flight.status;
    };
    FlightComponent.prototype.delete = function () {
        this.isDeleting = true;
        this.removeFlight.emit(this.flight);
    };
    FlightComponent.prototype.edit = function () {
        this.editFlight.emit(this.flight);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__flight_model__["a" /* Flight */])
    ], FlightComponent.prototype, "flight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], FlightComponent.prototype, "removeFlight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], FlightComponent.prototype, "editFlight", void 0);
    FlightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flight',
            template: __webpack_require__("../../../../../src/app/flights/flight/flight.component.html"),
            styles: [__webpack_require__("../../../../../src/app/flights/flight/flight.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FlightComponent);
    return FlightComponent;
}());



/***/ }),

/***/ "../../../../../src/app/flights/flights.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/flights/flights.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"col-12\">\n\t<div class=\"row\">\n\t\t<div class=\"col-6\">\n\t\t\t<ul class=\"row\">\n\t\t\t\t<li class=\"card col-12\" *ngFor=\"let flight of flights\">\n\t\t\t\t\t<app-flight [flight]=\"flight\" (removeFlight)=\"removeFlight($event)\" (editFlight)=\"editFlight($event)\"></app-flight>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"col-6\">\n\t\t\t<app-flight-add \n\t\t\t(addedFlight)=\"addedFlight($event)\" \n\t\t\t(editFlight)=\"editFlightSave($event)\" \n\t\t\t[selectedFlight]=\"selectedFlight\" \n\t\t\t[canAdd]='!loading'>\n\t\t\t</app-flight-add>\n\t\t\t<div *ngIf=\"loading\">\n\t\t\t\tloading...\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/flights/flights.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flights_service__ = __webpack_require__("../../../../../src/app/flights/flights.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_model__ = __webpack_require__("../../../../../src/app/flights/flight.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Se importan el servicio y la clase model que se utilliza dentro del servicio


var FlightsComponent = /** @class */ (function () {
    // Se inician los servicios desde el constructor del componente
    function FlightsComponent(flightsService) {
        this.flightsService = flightsService;
        this.selectedFlight = new __WEBPACK_IMPORTED_MODULE_2__flight_model__["a" /* Flight */];
        this.loading = false;
    }
    FlightsComponent.prototype.ngOnInit = function () {
        this.getFlights();
    };
    // Added Logic
    FlightsComponent.prototype.addedFlight = function (flight) {
        console.log('FE - Adding Flight: ' + flight);
        this.flightsService.addFlight(flight);
        this.getFlights();
    };
    FlightsComponent.prototype.getFlights = function () {
        var _this = this;
        console.log('Get Flights - FE Service');
        this.flightsService.getFlights()
            .then(function (data) {
            console.log(data);
            _this.flights = data.flights;
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    FlightsComponent.prototype.editFlight = function (flight) {
        console.log('edit', flight);
        this.selectedFlight = Object.assign({}, flight);
    };
    FlightsComponent.prototype.editFlightSave = function (flight) {
        var _this = this;
        this.flightsService.editFlight(flight.flight)
            .then(function (data) {
            _this.getFlights();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    // public removeFlight(flight){
    //   console.log('remove',flight);
    //   this.selectedFlight = Object.assign({}, flight);
    // }  
    FlightsComponent.prototype.removeFlight = function (flight) {
        var _this = this;
        this.flightsService.removeFlight(flight)
            .then(function (data) {
            _this.getFlights();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    FlightsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flights',
            template: __webpack_require__("../../../../../src/app/flights/flights.component.html"),
            styles: [__webpack_require__("../../../../../src/app/flights/flights.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__flights_service__["a" /* FlightsService */]])
    ], FlightsComponent);
    return FlightsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/flights/flights.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlightsService = /** @class */ (function () {
    function FlightsService(dataService) {
        this.dataService = dataService;
    }
    FlightsService.prototype.getFlights = function () {
        console.log('--- New Transaction ----------------------------------------------');
        console.log('FE - Getting Flights');
        return this.dataService.get('/api/flights');
    };
    FlightsService.prototype.addFlight = function (flight) {
        console.log('--- New Transaction ----------------------------------------------');
        console.log('FE - Adding Flight');
        return this.dataService.post('/api/flights', { 'flight': flight });
    };
    FlightsService.prototype.removeFlight = function (flight) {
        console.log('--- New Transaction ----------------------------------------------');
        console.log('FE - Removing Flight');
        return this.dataService.delete('/api/flights/' + flight._id);
    };
    FlightsService.prototype.editFlight = function (flight) {
        console.log('--- New Transaction ----------------------------------------------');
        console.log('FE - Editing Flights');
        return this.dataService.put('/api/flights/' + flight._id, { 'flight': flight });
    };
    FlightsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]])
    ], FlightsService);
    return FlightsService;
}());

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


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n\tcolor: #af0060;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<br>\n\t<br>\n\t<h2>Welcome to the new airport!</h2>\n\t<br>\n  \t<img class=\"airlinelogo\" src=\"/assets/images/home/Home-Banner.jpg\" alt=\"Home Banner\"/>\n </div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<nav class=\"col-8 routes\">\n\t\t<a routerLink=\"/\">Home</a> | \n\t\t<a routerLink=\"/passengers\">Passengers</a> | \n\t\t<a routerLink=\"/flights\">Flights</a> | \n\t\t<a routerLink=\"/about\">About</a>\n\t</nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/passengers/addpassenger/addpassenger.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n\twidth: 290px;\n}\n\nlabel {\n\twidth: 90px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/passengers/addpassenger/addpassenger.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<form [formGroup]=\"passengerForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\n\t<!-- Label / Textbox para 'Name' -->\n\t<!-- Label / Textbox para 'Name' -->\n\t<!-- Label / Textbox para 'Name' -->\n\t<div class=\"form-group\">\n\t\t<label class=\"center-block\">Name:\n\t\t\t<input class=\"form-control\" formControlName=\"name\">\n\t\t\t<!-- <input class=\"form-control\" formControlName=\"name\" [attr.disabled]=\"isEditing?'':null\"> -->\n\n\t\t</label>\n\t\t<div *ngIf=\"!passengerForm.controls['name'].valid \n\t\t\t\t\t&& (passengerForm.controls['name'].dirty \n\t\t\t\t\t|| passengerForm.controls['name'].touched)\" \n\t\t\t\t\tclass=\"alert alert-danger\">\n\t\t\t<div *ngIf=\"passengerForm.controls['name'].errors.required\">\n\t\t\t\tName is required\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- Label / Textbox para 'Destination' -->\n\t<!-- Label / Textbox para 'Destination' -->\n\t<!-- Label / Textbox para 'Destination' -->\n\t<div class=\"form-group\">\n\t\t<label class=\"center-block\">Destination:\n\t\t\t<input class=\"form-control\" formControlName=\"destination\">\n\t\t</label>\n\t\t<div *ngIf=\"!passengerForm.controls['destination'].valid \n\t\t\t\t&& (passengerForm.controls['destination'].dirty \n\t\t\t\t|| passengerForm.controls['destination'].touched)\" \n\t\t\t\tclass=\"alert alert-danger\">\n\t\t\t<div *ngIf=\"passengerForm.controls['destination'].errors.required\">\n\t\t\t\tDestination is required\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- Label / Textbox para 'FlightCode' -->\n\t<!-- Label / Textbox para 'FlightCode' -->\n\t<!-- Label / Textbox para 'FlightCode' -->\n\t<div class=\"form-group\">\n\t\t<label class=\"center-block\">Flight Code:\n\t\t\t<input class=\"form-control\" formControlName=\"flightcode\">\n\t\t</label>\n\t\t<div *ngIf=\"!passengerForm.controls['flightcode'].valid \n\t\t\t\t&& (passengerForm.controls['flightcode'].dirty \n\t\t\t\t|| passengerForm.controls['flightcode'].touched)\" \n\t\t\t\tclass=\"alert alert-danger\">\n\t\t\t<div *ngIf=\"passengerForm.controls['flightcode'].errors.required\">\n\t\t\t\tFlight Code is required.\n\t\t\t</div>\n\t\t\t<div *ngIf=\"passengerForm.controls['flightcode'].errors.patternInvalid\">\n\t\t\t\tFlight Code format invalid (Use 2-3 upper case letters [A-Z] followed by 1-3 numbers [0-9]).\n\t\t\t</div>\n\t\t\t<div *ngIf=\"passengerForm.controls['flightcode'].errors.minlength\">\n\t\t\t\tFlight Code must be at least 3 characters long.\n\t\t\t</div>\n\t\t\t<div *ngIf=\"passengerForm.controls['flightcode'].errors.maxlength\">\n\t\t\t\tFlight Code must be less than 7 characters long.\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div>\n\t\t<button type=\"submit\"\n\t\t[disabled]=\"passengerForm.invalid \" class=\"btn btn-success\">\n\t\t\t<span *ngIf=\"!isEditing\">Agregar</span>\n\t\t\t<span *ngIf=\"isEditing\">Editar</span></button> &nbsp;\n\t\t<button type=\"reset\" (click)=\"revert()\" class=\"btn btn-danger\">Revert</button>\n\t</div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/passengers/addpassenger/addpassenger.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpassengerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passenger_model__ = __webpack_require__("../../../../../src/app/passengers/passenger.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_pattern_validator__ = __webpack_require__("../../../../../src/app/shared/pattern-validator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { patternValidator } from '../../shared/pattern-validator';
var AddpassengerComponent = /** @class */ (function () {
    //
    function AddpassengerComponent(formBuilder) {
        this.formBuilder = formBuilder;
        // @Output() addedPassenger: EventEmitter<Passenger> = new EventEmitter<Passenger>();
        this.addedPassenger = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editedPassenger = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.canAdd = true;
        this.passenger = new __WEBPACK_IMPORTED_MODULE_2__passenger_model__["a" /* Passenger */]();
        this.submitted = false;
        this.isEditing = false;
        //
        this.newName = '';
        this.newDestination = '';
    }
    AddpassengerComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    AddpassengerComponent.prototype.createForm = function () {
        this.passengerForm = this.formBuilder.group({
            _id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](undefined),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            destination: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(25)
            ]),
            flightcode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(6),
                Object(__WEBPACK_IMPORTED_MODULE_3__shared_pattern_validator__["a" /* patternValidator */])(/^[A-Z]{2,3}\d{1,3}$/)])
        });
    };
    AddpassengerComponent.prototype.onSubmit = function () {
        var passenger = JSON.parse(JSON.stringify(this.passengerForm.value));
        if (this.isEditing) {
            this.editedPassenger.emit({ passenger: this.passengerForm.value, form: this.passengerForm });
            this.isEditing = false;
        }
        else {
            this.addedPassenger.emit(this.passengerForm.value);
            // this.addedPassenger.emit({passenger:this.passengerForm.value,form:this.passengerForm});
        }
        this.submitted = true;
    };
    AddpassengerComponent.prototype.ngOnChanges = function (changes) {
        console.log('changes', changes);
        if (changes.passenger && changes.passenger.currentValue._id) {
            console.log('is editing');
            if (changes.passenger.currentValue.__v !== undefined) {
                delete changes.passenger.currentValue.__v;
            }
            this.passengerForm.setValue(changes.passenger.currentValue);
            this.isEditing = true;
        }
    };
    AddpassengerComponent.prototype.revert = function () {
        this.passengerForm.reset();
        this.submitted = false;
        this.isEditing = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddpassengerComponent.prototype, "addedPassenger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddpassengerComponent.prototype, "editedPassenger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AddpassengerComponent.prototype, "canAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('selectedPassenger'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__passenger_model__["a" /* Passenger */])
    ], AddpassengerComponent.prototype, "passenger", void 0);
    AddpassengerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-passenger-add',
            template: __webpack_require__("../../../../../src/app/passengers/addpassenger/addpassenger.component.html"),
            styles: [__webpack_require__("../../../../../src/app/passengers/addpassenger/addpassenger.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], AddpassengerComponent);
    return AddpassengerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/passengers/passenger.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Passenger; });
var Passenger = /** @class */ (function () {
    function Passenger() {
        this._id = undefined;
    }
    return Passenger;
}());



/***/ }),

/***/ "../../../../../src/app/passengers/passenger/passenger.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active { \n    color: red;\n}\n\n.passengercontainer{\n\tpadding: 10px 0 10px 0;\n\n}\n\n.passengerdetails\n{  \n  height: 120px;\n  width: 380px;\n  float: left;\n  padding: 0px 0px 10px 20px;\n}\n\n.actions .text-center {\n\tmargin-bottom: 5px;\n}\n\n.actions .text-center button{\n\twidth: 85px;\n};", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/passengers/passenger/passenger.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"passengercontainer\">\n\t<div class=\"passengerdetails\">\n\t\t<p>\n\t  \tName: {{passenger.name}}\n\t  \t<br>\n\t  \tDestination: {{passenger.destination}}\n\t  \t<br>\n\t  \tFlight Code: {{passenger.flightcode}}\n\t  \t<br>\n\t\t<!--  Active: {{passengerparam.active}} -->\n\t\t</p>\n\t</div>\n\t<div class=\"col-3 actions\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-12 text-center\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"edit()\">Editar</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 text-center\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\"><span *ngIf=\"isDeleting\">...</span><span *ngIf=\"!isDeleting\">Eliminar</span></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t</div>\t\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/passengers/passenger/passenger.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__passenger_model__ = __webpack_require__("../../../../../src/app/passengers/passenger.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passengers_service__ = __webpack_require__("../../../../../src/app/passengers/passengers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PassengerComponent = /** @class */ (function () {
    function PassengerComponent(passengersService) {
        this.passengersService = passengersService;
        this.deletePassenger = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editedPassenger = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isDeleting = false;
    }
    PassengerComponent.prototype.ngOnInit = function () {
    };
    // public toogle(){
    //   this.passenger.active = !this.passenger.active;
    // }
    PassengerComponent.prototype.delete = function () {
        this.isDeleting = true;
        this.deletePassenger.emit(this.passenger);
    };
    PassengerComponent.prototype.edit = function () {
        this.editedPassenger.emit(this.passenger);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__passenger_model__["a" /* Passenger */])
    ], PassengerComponent.prototype, "passenger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PassengerComponent.prototype, "deletePassenger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PassengerComponent.prototype, "editedPassenger", void 0);
    PassengerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-passenger',
            template: __webpack_require__("../../../../../src/app/passengers/passenger/passenger.component.html"),
            styles: [__webpack_require__("../../../../../src/app/passengers/passenger/passenger.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__passengers_service__["a" /* PassengersService */]])
    ], PassengerComponent);
    return PassengerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/passengers/passengers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/passengers/passengers.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"col-12\">\n\t<div class=\"row\">\n\t\t<div class=\"col-6\">\n\t\t\t<ul class=\"row\">\n\t\t\t\t<li class=\"card col-12\" *ngFor=\"let passenger of passengers\">\n\t\t\t\t\t<app-passenger \n\t\t\t\t\t[passenger]=\"passenger\" (deletePassenger)=\"deletePassenger($event)\" (editedPassenger)=\"editedPassenger($event)\">\n\t\t\t\t\t\n\t\t\t\t</app-passenger>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"col-6\">\n\t\t\t<app-passenger-add (addedPassenger)=\"addedPassenger($event)\" (editedPassenger)=\"editedPassengerSave($event)\" [selectedPassenger]=\"selectedPassenger\" [canAdd]='!loading'></app-passenger-add>\n\t\t\t<div *ngIf=\"loading\">\n\t\t\t\tloading...\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/passengers/passengers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__passengers_service__ = __webpack_require__("../../../../../src/app/passengers/passengers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passenger_model__ = __webpack_require__("../../../../../src/app/passengers/passenger.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Se importan el servicio y la clase model que se utilliza dentro del servicio


var PassengersComponent = /** @class */ (function () {
    // Se inician los servicios desde el constructor del componente
    function PassengersComponent(passengersService) {
        this.passengersService = passengersService;
        this.selectedPassenger = new __WEBPACK_IMPORTED_MODULE_2__passenger_model__["a" /* Passenger */]();
        this.loading = false;
    }
    PassengersComponent.prototype.ngOnInit = function () {
        this.getPassengers();
    };
    // Functions to ADD Passenger
    // Functions to ADD Passenger
    // Functions to ADD Passenger
    // Old call
    PassengersComponent.prototype.addedPassenger = function (passenger) {
        console.log('FE - Adding Passenger: ' + passenger);
        this.passengersService.addPassenger(passenger);
        this.getPassengers();
    };
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
    PassengersComponent.prototype.editedPassenger = function (passenger) {
        console.log('Edit passenger', passenger);
        this.selectedPassenger = Object.assign({}, passenger);
    };
    PassengersComponent.prototype.editedPassengerSave = function (passenger) {
        var _this = this;
        this.passengersService.editPassenger(passenger.passenger)
            .then(function (data) {
            passenger.form.reset();
            _this.getPassengers();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    PassengersComponent.prototype.deletePassenger = function (passenger) {
        var _this = this;
        this.passengersService.removePassenger(passenger)
            .then(function (data) {
            _this.getPassengers();
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    // public getPassengers(){
    //   this.passengersService.obtenerUsuarios().subscribe((data) => {
    //       console.log('data',data);
    //       this.passengers = data.user;
    //     });
    // }
    PassengersComponent.prototype.getPassengers = function () {
        var _this = this;
        console.log('Get Passengers - FE Service');
        this.passengersService.getPassengers()
            .then(function (data) {
            console.log(data);
            _this.passengers = data.passengers;
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    PassengersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-passengers',
            template: __webpack_require__("../../../../../src/app/passengers/passengers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/passengers/passengers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__passengers_service__["a" /* PassengersService */]])
    ], PassengersComponent);
    return PassengersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/passengers/passengers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PassengersService = /** @class */ (function () {
    function PassengersService(dataService) {
        this.dataService = dataService;
    }
    PassengersService.prototype.getPassengers = function () {
        console.log('--- New Transaction ----------------------------------------------');
        console.log('FE - Getting list of passengers');
        return this.dataService.get('/api/passengers');
    };
    PassengersService.prototype.addPassenger = function (passenger) {
        console.log('--- New Transaction ----------------------------------------------');
        console.log('FE - Adding a passenger');
        return this.dataService.post('/api/passengers', { 'passenger': passenger });
    };
    PassengersService.prototype.removePassenger = function (passenger) {
        console.log('--- New Transaction ----------------------------------------------');
        console.log('FE - Removing a passenger');
        return this.dataService.delete('/api/passengers/' + passenger._id);
    };
    PassengersService.prototype.editPassenger = function (passenger) {
        console.log('--- New Transaction ----------------------------------------------');
        console.log('FE - Editing a passenger');
        return this.dataService.put('/api/passengers/' + passenger._id, { 'passenger': passenger });
    };
    PassengersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]])
    ], PassengersService);
    return PassengersService;
}());

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


/***/ }),

/***/ "../../../../../src/app/shared/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(requestOptions, dataService) {
        this.requestOptions = requestOptions;
        this.dataService = dataService;
        console.log('authService');
        requestOptions.headers.set('Content-type', 'application/json');
        // this.loadToken();
    }
    AuthService.prototype.loadToken = function () {
        var _this = this;
        this.dataService
            .get('/token').then(function (result) {
            console.log('response here', result);
            _this.requestOptions.headers.set('X-CSRF-TOKEN', result.csrfToken);
        }).catch(function (err) {
            console.log('error code', err.status);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.search = function (url, element) {
        console.log('Data.Service: Search operation on the way...');
        var options;
        var params;
        params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        for (var key in element) {
            if (element.hasOwnProperty(key)) {
                params.set(key, element[key]);
            }
        }
        options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ search: params });
        return this.http.get(url, options)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.post = function (url, element) {
        console.log('Data.Service: Post operation on the way...');
        console.log(element);
        return this.http.post(url, JSON.stringify(element))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.put = function (url, element) {
        console.log('Data.Service: Put operation on the way...');
        console.log('element', element);
        return this.http.put(url, JSON.stringify(element))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.postFile = function (url, element) {
        console.log('Data.Service: Post File operation on the way...');
        return this.http.post(url, JSON.stringify(element), { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Blob })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getAll = function (url) {
        console.log('Data.Service: Get All operation on the way...');
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Observable
    // public get(url: string): Observable<any> {
    //     console.log('url',url);
    //     return this.http.get(url)
    //         .map(response => response.json())
    //         .catch((e: any) => { console.log(e); return Observable.throw(e || 'Internal Server error');});
    // }
    // Promise - One time execution
    DataService.prototype.get = function (url) {
        console.log('Data.Service: Get operation on the way...');
        console.log('url', url);
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.delete = function (url, element) {
        console.log('Data.Service: Delete operation on the way...');
        if (element) {
            return this.http.delete(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ body: element }))
                .toPromise()
                .then(function (response) { return response.json(); })
                .catch(this.handleError);
        }
        else {
            return this.http.delete(url)
                .toPromise()
                .then(function (response) { return response.json(); })
                .catch(this.handleError);
        }
    };
    DataService.prototype.handleError = function (error) {
        console.log('Data.Service: Handle Error operation on the way...');
        return Promise.reject(error.message || error);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pattern-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = patternValidator;
function patternValidator(regexp) {
    return function (control) {
        var value = control.value;
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? { 'patternInvalid': { regexp: regexp } } : null;
    };
}


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
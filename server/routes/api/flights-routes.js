'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();

// Functions to GET Flights
// Functions to GET Flights
// Functions to GET Flights
function getFlights(request, response) {
    console.log('SERVER - GET flights - API',request.params.id);
    var result;
    try {
        result = await (service.flightsService.getFlight(request.params.id));
        // console.log('Flight Route: ');
        // console.log(result);
        return handlers.successResponseHandler(response, result);
    } catch (error) {
    	console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

// Functions to DELETE Flights
// Functions to DELETE Flights
// Functions to DELETE Flights
function deleteFlights(request, response) {
    console.log('SERVER - DELETE flight - API');
    var result;
    try {
        result = await (service.flightsService.deleteFlight(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

// Functions to UPDATE Flights
// Functions to UPDATE Flights
// Functions to UPDATE Flights
function updateFlights(request, response) {
    console.log('SERVER - UPDATE flight - API');
    var result;
    try {
        result = await (service.flightsService.updateFlight(request.body.flight));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

// Functions to ADD Flights
// Functions to ADD Flights
// Functions to ADD Flights
function postFlights(request, response) {
    console.log('SERVER - POST flight - API');
    var result;
    try {
        result = await (service.flightsService.postFlight(request.body.flight));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getFlights));
routes.get('/', async(getFlights));
routes.delete('/:id', async(deleteFlights));
routes.put('/:id', async(updateFlights));
routes.post('/', async(postFlights));

module.exports = routes;
'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();

// Functions to GET Passengers
// Functions to GET Passengers
// Functions to GET Passengers
function getPassengers(request, response) {
    console.log('SERVER - GET Passengers - API');
    var result;
    try {
        result = await (service.passengersService.getPassenger(request.params.id));
        // console.log('Passenger Route: ');
        // console.log(result);
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

// Functions to DELETE Passengers
// Functions to DELETE Passengers
// Functions to DELETE Passengers
function deletePassenger(request, response) {
    console.log('SERVER - DELETE Passenger - API');
    var result;
    try {
        result = await (service.passengersService.deletePassenger(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

// Functions to UPDATE Passengers
// Functions to UPDATE Passengers
// Functions to v Passengers
function updatePassenger(request, response) {
    console.log('SERVER - UPDATE Passenger - API');
    var result;
    try {
        result = await (service.passengersService.updatePassenger(request.body.passenger));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

// Functions to ADD Passengers
// Functions to ADD Passengers
// Functions to ADD Passengers
function postPassenger(request, response) {
    console.log('SERVER - POST Passenger - API',request.body);
    var result;
    try {
        result = await (service.passengersService.postPassenger(request.body.passenger));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getPassengers));
routes.get('/', async(getPassengers));
routes.delete('/:id', async(deletePassenger));
routes.put('/:id', async(updatePassenger));
routes.post('/', async(postPassenger));

module.exports = routes;
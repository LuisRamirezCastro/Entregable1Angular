'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var FlightsRsrc = require(__base + 'server/infrastructure/resources').flight;


// Functions to GET Flights
// Functions to GET Flights
// Functions to GET Flights
function getFlight(id) {
    var result;
    try {
    	if(id){
            console.log('SERVER - Get flight by ' + id + ' - Service');
        	result = await (FlightsRsrc.getFlight(id));
            return { flight: result };
        } else {
            console.log('SERVER - Get flights - Service');
        	result = await (FlightsRsrc.getFlights());
            return { flights: result };
        }   
    } catch(error) {
        throw error;
    }
    
}

// Functions to UPDATE Flights
// Functions to UPDATE Flights
// Functions to UPDATE Flights
function updateFlight(flight) {
    var result;
    console.log('SERVER - Update flight by ' + flight._id + ' - Service');
    try {
        result = await (FlightsRsrc.updateFlight(flight));
    } catch(error) {
        throw error;
    }
    return { flight: result };
}

// Functions to DELETE Flights
// Functions to DELETE Flights
// Functions to DELETE Flights
function deleteFlight(id) {
    var result;
    console.log('SERVER - Delete flight by ' + id + ' - Service');
    try {
        result = await (FlightsRsrc.deleteFlight(id));
    } catch(error) {
        throw error;
    }
    return { flight: result };
}

// Functions to ADD Flights
// Functions to ADD Flights
// Functions to ADD Flights
function postFlight(flight) {
    var result;
    console.log('SERVER - Post flight - Service');
    try {
        result = await (FlightsRsrc.addFlight(flight));
    } catch(error) {
        throw error;
    }
    return { flight: result };
}

module.exports.getFlight = async(getFlight);
module.exports.updateFlight = async(updateFlight);
module.exports.deleteFlight = async(deleteFlight);
module.exports.postFlight = async(postFlight);
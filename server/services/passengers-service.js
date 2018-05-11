'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var PassengersRsrc = require(__base + 'server/infrastructure/resources').passenger;


// Functions to GET Passengers
// Functions to GET Passengers
// Functions to GET Passengers
function getPassenger(id) {
    var result;
    try {
        if(id){
            console.log('SERVER - Get passenger by ' + id + ' - Service');
            result = await (PassengersRsrc.getPassenger(id));
            return { passenger: result };
        } else {
            console.log('SERVER - Get passengers - Service');
            result = await (PassengersRsrc.getPassengers());
            return { passengers: result };
        }
        console.log('Result length: ' + result.length + ' - Service');    
    } catch(error) {
        throw error;
    }
    
}

// Functions to UPDATE Passengers
// Functions to UPDATE Passengers
// Functions to UPDATE Passengers
function updatePassenger(passenger) {
    var result;
    console.log('SERVER - Update passenger by ' + passenger._id + ' - Service');
    try {
        result = await (PassengersRsrc.updatePassenger(passenger));
        console.log('Result length: ' + result.length + ' - Service');    
    } catch(error) {
        throw error;
    }
    return { passenger: result };
}

// Functions to DELETE Passengers
// Functions to DELETE Passengers
// Functions to DELETE Passengers
function deletePassenger(id) {
    var result;
    console.log('SERVER - Delete passenger by ' + id + ' - Service');
    try {
        result = await (PassengersRsrc.deletePassenger(id));
        console.log('Result length: ' + result.length + ' - Service');    
    } catch(error) {
        throw error;
    }
    return { passenger: result };
}

// Functions to ADD Passengers
// Functions to ADD Passengers
// Functions to ADD Passengers
function postPassenger(passenger) {
    var result;
    console.log('SERVER - Post passenger - Service',passenger);
    try {
        result = await (PassengersRsrc.addPassenger(passenger));
        console.log('Result length ' + result.length + ' - Service');    
    } catch(error) {
        throw error;
    }
    return { passenger: result };
}

module.exports.getPassenger = async(getPassenger);
module.exports.updatePassenger = async(updatePassenger);
module.exports.deletePassenger = async(deletePassenger);
module.exports.postPassenger = async(postPassenger);
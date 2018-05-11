var async = require('asyncawait/async');
var await = require('asyncawait/await');
var passengerModel = require(__base + 'server/model/passenger');

// Functions to GET Passengers
// Functions to GET Passengers
// Functions to GET Passengers
function getPassengers() {
    console.log('SERVER - Get Passengers - Resource');
    var passengers = await(passengerModel.find({}));
    return passengers;
}

function getPassenger(id) {
    console.log('SERVER - Get Passenger by Id - Resource');
    var passenger = await(passengerModel.findOne({_id:id}));
    return passenger;
}

// Functions to DELETE Passengers
// Functions to DELETE Passengers
// Functions to DELETE Passengers
function deletePassenger(id) {
    console.log('SERVER - Delete Passengers - Resource');
    var passenger = await(passengerModel.remove({_id:id}));
    return passenger;
}

// Functions to UPDATE Passengers
// Functions to UPDATE Passengers
// Functions to UPDATE Passengers
function updatePassenger(passengerParam) {
    console.log('Update Passengers - Resource');
    var passenger = await(passengerModel.update({_id:passengerParam._id},passengerParam));
    return passenger;
}

// Functions to ADD Passengers
// Functions to ADD Passengers
// Functions to ADD Passengers
function addPassenger(passengerParam) {
    console.log('Save Passengers - Resource');
    var passenger = await(passengerModel.create(passengerParam));
    return passenger;
}

module.exports = {
    getPassengers: async(getPassengers),
    getPassenger: async(getPassenger),
    deletePassenger: async(deletePassenger),
    updatePassenger: async(updatePassenger),
    addPassenger: async(addPassenger)
};
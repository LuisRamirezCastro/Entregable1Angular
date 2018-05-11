var async = require('asyncawait/async');
var await = require('asyncawait/await');
var flightModel = require(__base + 'server/model/flight');

// Functions to GET Flights
// Functions to GET Flights
// Functions to GET Flights
function getFlights() {
    console.log('SERVER - Get Flights - Resource');
    var flights = await(flightModel.find({}));
    return flights;
}

function getFlight(id) {
    console.log('SERVER - Get Flight by Id - Resource');
    var flight = await(flightModel.findOne({_id:id}));
    return flight;
}

// Functions to DELETE Flights
// Functions to DELETE Flights
// Functions to DELETE Flights
function deleteFlight(id) {
    console.log('SERVER - Delete Flight - Resource');
    var flight = await(flightModel.remove({_id:id}));
    return flight;
}
// Functions to UPDATE Flights
// Functions to UPDATE Flights
// Functions to UPDATE Flights
function updateFlight(flightParam) {
    console.log('SERVER - Update Flight - Resource');
    var flight = await(flightModel.update({_id:flightParam._id},flightParam));
    return flight;
}
// Functions to ADD Flights
// Functions to ADD Flights
// Functions to ADD Flights
function addFlight(flightParam) {
    console.log('SERVER - Save Flight - Resource');
    var flight = await(flightModel.create(flightParam));
    return flight;
}

module.exports = {
    getFlights: async(getFlights),
    getFlight: async(getFlight),
    deleteFlight: async(deleteFlight),
    updateFlight: async(updateFlight),
    addFlight: async(addFlight)
};
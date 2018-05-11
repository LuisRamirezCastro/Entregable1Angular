var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:        { type: String, require: true },
    destination: { type: String, require: true },
    flightcode:  { type: String, require: true },
    active:      { type: Boolean, require: true }
},{ 
	versionKey: false 
});

module.exports = mongoose.model('passenger', schema);
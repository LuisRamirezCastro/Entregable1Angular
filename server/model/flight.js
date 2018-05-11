// import {Passenger} from './passenger';

var mongoose = require('mongoose');


var schema = new mongoose.Schema({
    
    airline:     { type: String, require: true },
    code:        { type: String, require: true },
    destination: { type: String, require: true },
    date:        { type: String, require: true },
	status:      { type: Boolean, require: true }
	// ,
 //    passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: ‘passenger’ }]

}, {
    versionKey: false
});

module.exports = mongoose.model('flight', schema);
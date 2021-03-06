//create DB


var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var url = "mongodb://localhost:27017/";
// var url = "mongodb://user_heroku_training:user_heroku_training@ds229878.mlab.com:29878/heroku_0vff4c09";

MongoClient.connect(url, function(err, db) {
    if (err) {
    	console.log('has an error');
    	throw err;
    }
    addCollections(db);
});


function addCollections(db){
	// var dbase = db.db("heroku_0vff4c09"); //heroku db name
	var dbase = db.db("airport");
	dbase.createCollection("flights");
	dbase.createCollection("passengers",function(err, res) {
	    if (err) throw err;
		console.log("Collection passengers created!");
		res.createIndex( { "passenger": 1 }, { unique: true } )
		// res.insertMany([{username:'admin',name:'admin',password:'admin'},{username:'user',name:'user',password:'user'}]);
		db.close();
	});
}

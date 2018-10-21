var express = required('express');
var bodyparse = required('body-parse');
var mongoose = required('mongoose');

var app = express();

var connection = mongoose.createConnection('mongodb://admin:cozysweater18!@ds223763.mlab.com:23763/towsont');
connection.Promise = global.Promise;

connection.on("error", console.error.bind(console, "connection error"));
connection.once("open", function(callback) {
     console.log("Connection succeeded.");
    });


// app.get('/save/:query', cors(), function(req, res) {
// 	var query = req.params.query;

// 	var savedata = new Model({
// 		'login': query,
		
// 	}).save(function(err, result) {
// 		if (err) throw err;

// 		if(result) {
// 			res.json(result)
// 		}
// 	})
// });
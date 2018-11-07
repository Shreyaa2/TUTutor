var express = require('express');
var path= require('path');
var bodyparse = require('body-parser');

var catalog = require('./indexroutes');

var app =express();

var Mongoose = require('mongoose');
var mongo = 'mongodb://admin:cozysweater18!@ds223763.mlab.com:23763/towsont';
Mongoose.connect(mongo);
Mongoose.Promise = global.Promise;
var db = Mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
connection.once("open", function(callback) {
     console.log("Connection succeeded.");
    });

//looks at incoming data and parses it depending on it coming from a JSON or data from a form
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });


  //set port
 //Heroku is going to set the port or if Heroku can't, then we will be at port 3000
 var port = process.env.PORT || 3000;

  //allows use to have static files like style sheets and js/script
 app.use(express.static(__dirname));
 

 //allows use to have static files like style sheets and js/script
 app.use(express.static(__dirname));
 app.use('/models/pupil', prouter);

 //looks at incoming data and parses it depending on it coming from a JSON or data from a form
 app.use(bodyparse.JSON());
 app.use(bodyparse.urlencoded({ extended: true }));


  //routes


  //routes

  app.get("/", function(req,res){
      res.sendFile(path.join(__dirname+'/tututor_mainpage.html'));
 });



  app.listen(port, function(){
  console.log(`Listening on port ${port}`);
  });



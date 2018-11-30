var express = require('express');
var app = express();
var path = require('path');
var bodyparse = require('body-parser');
app.use(bodyparse.json());
var mongoose = require('mongoose');


//importing controller
var indexr= require('./indexroutes');


process.env.MONGODB = 'mongodb://admin:cozysweater18!@ds039707.mlab.com:39707/heroku_l1frxk38';
//process.env.MONGODB = 'mongodb://admin:cozysweater18!@ds223763.mlab.com:23763/towsont';
mongoose.connect(process.env.MONGODB, {useNewUrlParser: true}, {useMongoClient: true});

//mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.on('connected', function () {
    if (mongoose.connection.readyState == true){
        console.log('connected');
    }
else 
    {
        console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
}
  });
mongoose.Promise = global.Promise;


 //set port
 //Heroku is going to set the port or if Heroku can't, then we will be at port 3000
 var port = process.env.PORT || 3000;

//allows use to have static files like style sheets and js/script
app.use(express.static(__dirname));

  app.get("/", function(req, res){
      res.sendFile(path.join(__dirname+'/tututor_mainpage.html'));
 });

 app.use('/pupilpro', indexr);
 app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

 

  app.listen(port, function(){
  console.log(`Listening on port ${port}`);
  });

 



// // Add routes to middleware chain.
// app.use('/indexrouters', catalog);

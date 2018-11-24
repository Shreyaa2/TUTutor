var express = require('express');
//var router = express.Router();
var app = express();
var path = require('path');
var bodyparse = require('body-parser');
const morgan = require('morgan');
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended: false}));
app.use(morgan("dev"));
var mongoose = require('mongoose');
//importing controller
//var indexr= require('./indexroutes');
var pupil = require('./pupils');


process.env.MONGODB = 'mongodb://heroku_l1frxk38:cozysweater18!@ds039707.mlab.com:39707/heroku_l1frxk38'
mongoose.connect(process.env.MONGODB, {useNewUrlParser: true}, {useMongoClient: true});

//mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.on('error', function () {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
  });
mongoose.Promise = global.Promise;


 //set port
 //Heroku is going to set the port or if Heroku can't, then we will be at port 3000
 var port = process.env.PORT || 3000;

  //looks at incoming data and parses it depending on it coming from a JSON or data from a form
 var jsonParser = bodyparse.json();
 //app.use(jsonParser.urlencoded({extended: false}));

 app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
});


//allows use to have static files like style sheets and js/script
app.use(express.static(__dirname));

  app.get("/", function(req, res){
      res.sendFile(path.join(__dirname+'/tututor_mainpage.html'));
 });

//  app.post("/", function(req,res){
//      res.sendFile(path.join(__dirname+'GitHub/TUTutor/pupilpro'))
//  })

//app.use('pupilcontroller', jsonParser,indexr);
app.post('/pupilpro', function (req, res){
    var pupili = new pupil (
        {
         pfname: req.body.pupilFirst,
         plname: req.body.pupilLast,
         pemail: req.body.pupilemail,
         ppassword: req.body.pupilpassword,
         pvpassword: req.body.verifypupilpassword,
         pmajor: req.body.pupilMajor,
         plevel: req.body.academicYear
        },
        pupili.save(function (err, pupil){
            if (err) return console.error(err);
            res.status(201);
            console.log(pupil.fname + ' saved to collection');
        })
    );
    });

 //mongoose.connection.close();
  app.listen(port, function(){
  console.log(`Listening on port ${port}`);
  });


  //module.exports = app;




 

//  //looks at incoming data and parses it depending on it coming from a JSON or data from a form
//  app.use(bodyparse.json());
//  app.use(bodyparse.urlencoded({ extended: true }));

// // Add routes to middleware chain.
// app.use('/indexrouters', catalog);
 var express = require('express');
 var app =express();
var path= require('path');
var bodyparse = required('body-parse');
//import route for pupildata
import prouter from './pupilroute';

  //set port
 //Heroku is going to set the port or if Heroku can't, then we will be at port 3000
 var port = process.env.PORT || 3000

  //allows use to have static files
 app.use(express.static(__dirname));

 //allows use to have static files like style sheets and js/script
 app.use(express.static(__dirname));
 app.use('/models/pupil', prouter);

 //looks at incoming data and parses it depending on it coming from a JSON or data from a form
 app.use(bodyparse.JSON());
 app.use(bodyparse.urlencoded({ extended: true }));


  //routes


 app.get("/", function(req,res){
      res.sendFile(path.join(__dirname+'/tututor_mainpage.html'));
 })

  app.listen(port, function(){
  console.log("app running");
  })

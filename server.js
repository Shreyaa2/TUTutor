 var express = require('express');
 var app =express();

  //set port
 //Heroku is going to set the port or if Heroku can't, then we will be at port 3000
 var port = process.env.PORT || 3000

  //allows use to have static files
 app.use(express.static(__dirname));

  //routes


 app.get("/", function(req,res){
      res.render("tututor_mainpage.html");
 })

  app.listen(port, function(){
  console.log("app running");
  })

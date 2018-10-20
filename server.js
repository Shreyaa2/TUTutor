//  var express = require('express');
// var app =express();

//  //set port
// //Heroku is going to set the port or if Heroku can't, then we will be at port 8080
// var port = process.env.PORT || 8080

//  //allows use to have static files
//  app.use(express.static(__dirname));

//  //routes


//  app.get("/", function(req,res){
//      res.render("tututor_mainpage");
//  })

//  app.listen(port, function(){
//   console.log("app running");
//  })

var http = require('http'),
    fs = require('fs')
var port = process.env.PORT || 8080
http.createServer(function(req, res) {
    var url = './' + (req.url == '/' ? 'tututor_mainpage.html' : req.url)
    fs.readFile(url, function(err, html) {
        if (err) {
            var message404 = "There is no such page! <a href='/'>Back to home page</a>"
            res.writeHead(404, {'Content-Type': 'text/html', 'Content-Length': message404.length})
            res.write(message404)
        } else {
            res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': html.length})
            res.write(html)
        }
        res.end()
    })
}).listen(port)

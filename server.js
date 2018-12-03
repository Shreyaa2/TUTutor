var express = require('express');
var app = express();
var path = require('path');
var bodyparse = require('body-parser');
app.use(bodyparse.json());
var mongoose = require('mongoose');


//importing routes
var pupilroutes= require('./Routers/Pupilroutes');
var tutorroutes = require ('./Routers/Tutorroutes');
var login = require('./Routers/Login');
var tlogin = require('./Routers/Logintutor');
var alogin = require('./Routers/adminlogin');
var board1 = require('./Routers/Homeroutes');


//handling CORS errors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

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
    res.sendFile(path.join(__dirname, 'tututor_mainpage.html'));
});

 app.use('/pupilpro', pupilroutes);
 app.use('/tutorpro', tutorroutes);
 app.use('/signins', login);
 app.use('/signint', tlogin);
 app.use('/signina', alogin);
 app.use('/board', board1);

 app.use(function (req, res, next) {
    const error = new Error('Not Found');
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

 


  app.listen(port, function(){
  console.log(`Listening on port ${port}`);
  });

 



// // Add routes to middleware chain.
// app.use('/indexrouters', catalog);

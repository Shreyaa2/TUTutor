//Contains all controllers 

var express = require('express');
var router = express.Router();
var app = express();
var bodyparse = require('body-parser');
var j = bodyparse.json();
var urlencodedParser = bodyparse.urlencoded({extended: true});
app.use(bodyparse.json());
var $ = require('jquery');

//mongoose schema
const pupil = require('../pupils');

//importing the controller to implement http requests
//var pupil_controller = require('./pupils');

router.get('/',urlencodedParser,j,function (req, res){
    res.status(200).json({
        message: 'handling pupil get'
    });
    });

router.post('/', urlencodedParser,j,function (req, res){
    var pupili = new pupil (
        {
         user: 'Student',
         pfname: req.body.pupilFirst,
         plname: req.body.pupilLast,
         pemail: req.body.pupilemail,
         ppassword: req.body.pupilpassword,
         pvpassword: req.body.verifypupilpassword,
         pmajor: req.body.pupilMajor,
         plevel: req.body.academicYear,
        });
        pupili.save(function (err, pupil){
            if (err) return console.error(err);
             res.status(201);
          res.redirect('homepage.html'); 
        });    
    });


module.exports = router;


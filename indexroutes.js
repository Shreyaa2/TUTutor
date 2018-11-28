//Contains all controllers 

var express = require('express');
var router = express.Router();
const pupil = require('./pupils');
//importing the controller to implement http requests
//const pupil_controller = require('./pupilcontroller');

//router.get('/pupilprofile', pupil_controller.getstatus);

router.post('/pupilpro', function (req, res){
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
            res.status(201).send(pupil.fname + ' saved to collection');
        }));
});

module.exports = router;


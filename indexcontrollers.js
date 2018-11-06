//Contains all controllers 

var express = require('express');
var router = express.Router();

//importing the controller to implement http requests
var pupil_controller = require('./pupilroute');

router.post('/book/create', pupil_controller.create_pupilpro);

module.exports = router;


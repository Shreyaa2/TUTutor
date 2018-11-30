var express = require('express');
var router = express.Router();
var app = express();
var bodyparse = require('body-parser');
var j = bodyparse.json();
var urlencodedParser = bodyparse.urlencoded({extended: true});
app.use(bodyparse.json());
var $ = require('jquery');

const tutor = require('./tutors');

router.get('/', urlencodedParser,j,function(req, res){
    res.status(200);
});

router.post('/', urlencodedParser,j,function (req, res) {
    var tutori = new tutor ({
        tfname: req.body.tutorFirst,
        tlname: req.body.tutorLast,
        temil: req.body.tutorEmail,
        tpassword: req.body.tutorpasword, 
        tvpassword: req.body.verifytutorpassword,
        tmajor: req.body.tutorMajor,
        tlevel: req.body.academicYear,
        tcourse: req.body.tutorCourse,
        trate: req.body.tutorRate,
    });
    tutori.save(function (err){
        if (err) return console.error(err);
        res.status(201);
        res.redirect('https://towsonu-tutor.herokuapp.com/homepage.html');    
    });
});

module.exports = router2;
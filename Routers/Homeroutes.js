var express = require('express');
var router = express.Router();
var app = express();
var bodyparse = require('body-parser');
var j = bodyparse.json();
var urlencodedParser = bodyparse.urlencoded({extended: true});
app.use(bodyparse.json());
var $ = require('jquery');

var pupil = require('../pupils');
var tutor = require('../tutors');

router.get('/', urlencodedParser, j, function(req, res, next){
    tutor.findOne({tcourse: req.body.searchbtn})
    .exec()
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).json({
            error: err    
        });
    })
});

module.exports = router;
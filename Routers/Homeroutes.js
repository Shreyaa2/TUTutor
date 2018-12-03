var express = require('express');
var router = express.Router();
var app = express();
var bodyparse = require('body-parser');
var j = bodyparse.json();
var urlencodedParser = bodyparse.urlencoded({extended: true});
app.use(bodyparse.json());
var $ = require('jquery');

var tutor = require('../tutors');

router.post('/236', urlencodedParser, j, function(req, res, next){
    tutor.find({tcourse: 'COSC236'},'tfname tlname temail', function(err, Tutor) {
        if (err) return res.status(500).send(err)
      return res.status(200).send(Tutor);
    }). exec();
    });

    router.post('/600', urlencodedParser, j, function(req, res, next){
        tutor.find({tcourse: 'COSC600'},'tfname tlname temail', function(err, Tutor) {
            if (err) return res.status(500).send(err)
          return res.status(200).send(Tutor);
        }). exec();
        });
    
        router.post('/237', urlencodedParser, j, function(req, res, next){
            tutor.find({tcourse: 'COSC237'},'tfname tlname temail', function(err, Tutor) {
                if (err) return res.status(500).send(err)
              return res.status(200).send(Tutor);
            }). exec();
            });
module.exports = router;



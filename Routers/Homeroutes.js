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
//
router.post('/', urlencodedParser, j, function(req, res, next){
    tutor.findOne({tcourse: 'COSC236'}, function(err, Tutor) {
        if (err) return res.status(500).send(err)
      return res.status(200).send(Tutor);
    }). exec();
    });
module.exports = router;


//$.ajax({
//     type: "GET",
//     url: Url,
//     // data: {
//     // 	tcourse: data
//     // },
//     // dataType: JSON,
//     success: function(data){
//         $('.output tbody').html(data).show();
//     },
//     error: function(error){
//         console.log('error ${error}')
// }
//        });
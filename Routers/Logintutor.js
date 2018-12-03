var express = require('express');
var router = express.Router();
var app = express();
var bodyparse = require('body-parser');
var j = bodyparse.json();
var urlencodedParser = bodyparse.urlencoded({extended: true});
app.use(bodyparse.json());
var $ = require('jquery');
const tutor = require('../tutors');

router.get('/' ,urlencodedParser, j, (req, res, next) => {
    tutor.find({temail: req.body.tutorloginEmail}) 
     .exec()
     .then( users => {
         if(users.length < 1) {          
             res.status(401).json({
                 message: 'Authentication email failed tutor'
             });
         }
       tutor.find({tpassword: req.body.tutorloginpassword}, function(err, result){
           if (err) {
              res.status(401).json({
                   messgae: 'Authentication failed password '
               });
             }
           if (result) {
           res.status(200);
           res.redirect('homepage.html');
         }
         res.status(401).json({
             message: 'Auth failed, last bit'
         });
       });  
     })
     .catch(err => {
         res.status(500).json({
             error: err    
         });
     });
 });



module.exports = router;

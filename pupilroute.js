var express = require('express');
const router = express.Router();
//gets the exported model
var mongoose = require('mongoose');
const Pupil = require('../Models/pupil');


router.post('/', function(req, res, next){
    //creates an instance and adds it to the db
//model, method
   Pupil.create(req.body).then(function(pupil){
       res.send(pupil);
   });
   //adds data from the form, not done completely 
   const pupili = new Pupil({
fname: req.body.pfname,
lname: req.body.lname,
ppassword: req.body.pass,
pvpassword: eq.body.vpass,
pemail: req.body.pemail,
pmajor: req.body.pmajor,
plevel: req.body.plevel
       });
       pupili.save()
       .then(result => {
           console.log(result);
       }).catch(err => console.log(err));
       res.status(201).json({
           message: 'handling post',
           createPupil: pupili
       });
});


// router.post('/adduser', function(req, res) {
//     var db = req.db;
//     var collection = db.get('userlist');
//     collection.insert(req.body, function(err, result){
//       res.send(
//         (err === null) ? { msg: '' } : { msg: err }
//       );
//     });
//   });


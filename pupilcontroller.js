// controller that processes the data for routers, list of routes with their functions 
//taken from controllers 
const mongoose = require('mongoose');
const pupil = require('./pupils');
//var async = require('async')


// check 
router.get('/pupilprofile', function(req, res){
    //creates an instance and adds it to the db
//model, method
   pupil.create(req.body).then(function(pupil){
       res.send(pupil);
   });
     //adds data from the form
});


//exports the create command, used in the page 
exports.create_pupilpro = [ (req, res, next) => {
   var pupili = new pupil (
       {
        fname: req.body.pfname,
        lname: req.body.lname,
        ppassword: req.body.pass,
        pvpassword: eq.body.vpass,
        pemail: req.body.pemail,
        pmajor: req.body.pmajor,
        plevel: req.body.plevel
       });
        pupili.save(function (err){
           if (err) { return next(err); }
    //    .then(result => {
    //        console.log(result);
    //    }).catch(err => console.log(err));
    //    res.status(201).json({
    //        message: 'handling post',
    //        createPupil: pupili

res.redirect("another url");
       });
    }
    ];

//export this router



// router.post('/adduser', function(req, res) {
//     var db = req.db;
//     var collection = db.get('userlist');
//     collection.insert(req.body, function(err, result){
//       res.send(
//         (err === null) ? { msg: '' } : { msg: err }
//       );
//     });
//   });


var express = required('express');
const router = express.Router();
//gets the exported model
const Pupil = required('../Models/pupil');


router.post('/tapi/pupil', function(req, res){
    //creates an instance and adds it to the db
//model, method
   Pupil.create(req.body).then(function(pupil){
       res.send(pupil);
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


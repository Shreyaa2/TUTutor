var express = require('express');
var router = express.Router();
var app = express();
var bodyparse = require('body-parser');
var j = bodyparse.json();
var urlencodedParser = bodyparse.urlencoded({extended: true});
app.use(bodyparse.json());
var $ = require('jquery');

const tutor = require('../tutors');

router.get('/', urlencodedParser, j, function( req, res, next){
    res.status(200);
})

router.post('/', urlencodedParser,j,function (req, res, next) {
    var tutori = new tutor ({
        user: 'Tutor',
        tfname: req.body.tutorFirst,
        tlname: req.body.tutorLast,
        temail: req.body.tutorEmail,
        tpassword: req.body.tutorpassword, 
        tvpassword: req.body.verifytutorpassword,
        tmajor: req.body.tutorMajor,
        tlevel: req.body.academicYear,
        tcourse: req.body.tutorCourse,
        trate: req.body.tutorRate,
        tdesc: req.body.desc,
    });
    tutori.save(function (err){
        if (err) return console.error(err);
        res.status(201);
        res.redirect('homepage.html');    
    });
});

router.post('/:tutor_id', urlencodedParser,j,function(req, res, next){
    var id = req.params.productId;
    tutor.findById(id)
    .exec()
    .then (doc =>{
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});



 //router.get('/' , urlencodedParser, j, (req, res, next) => {
//     // can use .limit if we want to limit the output
//     tutor.find()
//     .select('name the keys of data you watch to specifically display/return = doc')
//     .exec()
//     .then(doc => {
//         //sending the data back to the browser
//         res.status(200).json(doc);
//     })
//     .catch(err => {
//         res.status(500).json({
//             error: err
//         });
//     }); 
// })

// router.delete('/tutorid', (res, req, next) => {
//     var id= req.params.tutorid;
//     // change id to name or whatever other param if this doesnt work
//     tutor.deleteOne({_id: id})
//     .exec()
//     .then(result => {
//             res.status(200).json(result);
//     })
//     .catch ( err => {
//         res.status(500).json({
//             error: err
//         });
//     })
// })

module.exports = router;

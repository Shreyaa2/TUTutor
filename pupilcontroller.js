// controller that processes the data for routers, list of routes with their functions 
//taken from controllers 

const pupil = require('./pupils');
//var async = require('async')

exports.getstatus = [ (req, res, next) => {
    res.status(200).json({
        message: 'handling get request'
    });
}];
//exports the create command, used in the page 
exports.create_pupilpro = [ (req, res, next) => {
    //using the schema created to map values2
   var pupili = new pupil (
       {
        fname: req.body.pfname,
        lname: req.body.lname,
        ppassword: req.body.pass,
        pvpassword: req.body.vpass,
        pemail: req.body.pemail,
        pmajor: req.body.pmajor,
        plevel: req.body.plevel
       });
       pupili
       .save()
      .then(result =>{
    console.log(result);
    res.status(201).json({
        message: "profile created",
       pupil: {
        fname: result.pfname,
        lname: result.lname,
        ppassword: result.pass,
        pvpassword: result.vpass,
        pemail: result.pemail,
        pmajor: result.pmajor,
        plevel: result.plevel
       },
       request: {
           type: "POST",
           url:"http://localhost:3000/pupilprofile"
       }
    });
  });
}];
       
       
       
     //   pupili.save(function (err){
          // if (err) { return next(err); }
    //    res.status(201).json({
    //        type: "POST",
    //        url: "";
    //        message: 'new pupil profile created',
    //        createPupil: pupili

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


var express = required('express');
const router = express.Router();
//gets the exported model
const Login = required('../Models/login');


router.post('/tapi/login', function(req, res){
    //creates an instance and adds it to the db
//model, method
   Login.create(req.body).then(function(login){
       res.send(login);
   });

})
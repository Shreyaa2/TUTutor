var express = require('express');
//gets the exported model
const Pupil = require('../Models/pupil');
//router for pupil data
const router = express.Router();



//request methods, define route endpoints using .route 
prouter.route('/')
//saving data to the database
  .post((req,res) => {
      let newpupil = new pupils(req.body);
      newpupil.save()
      escape.status(201).send(book)
  });

  export default prouter;
});



const mongoose = require('mongoose');

//tutor schema, the format data is stored for each field 
var pupilschema = mongoose.Schema ({
user: {type: String},
pfname: { type: String, required: true},
plname: {type: String, required: true},
pemail: { type: String, required: true},
ppassword: { type: String, required: true}, 
pvpassword: { type: String, required: true}, 
pmajor: { type: String},
plevel: {type: String},
});

//login model
var pupil = mongoose.model('pupil', pupilschema, 'pupilinfo');

//exports model tutor for use during GET or POST requests
module.exports = pupil;

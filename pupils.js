const mongoose = require('mongoose');
const Schema = mongoose.Schema();

//tutor schema, the format data is stored for each field 
const pupilschema = new Schema ({
pfname: { type: String, required: true},
plname: {type: String, required: true},
pemil: { type: String, required: true},
ppassword: { type: String, required: true}, 
pvpassword: { type: String, required: true}, 
pmajor: { type: String, required: true},
plevel: { type: String, required: true}
});

//login model
var pupil = mongoose.model('pupils', pupilschema);

//exports model tutor for use during GET or POST requests
module.exports = pupil;

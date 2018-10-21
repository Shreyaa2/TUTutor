const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//tutor schema, the format data is stored for each field 
const pupilschema = new Schema ({
pfname: {
    type: String,
    required: [true, 'email field is required']
},
plname: {
    type: String,
    required: [true, 'email field is required']
},
    pemil: {
    type: String,
    required: [true, 'email field is required']
},
ppassword: {
    type: String,
    required: [true, 'Password field is required']
}, 
pvpassword: {
    type: String,
    required: [true, 'Verify Password field is required']
}, 

pmajor: {
    type: String,
    required: [true, 'Verify Password field is required']
},
plevel: {
    type: String,
    required: [true, 'Verify Password field is required']
}
});

//login model
var pupil = mongoose.model('pupils', pupilschema);

//exports model tutor for use during GET or POST requests
model.exports = pupil;

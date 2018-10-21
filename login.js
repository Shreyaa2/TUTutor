const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//tutor schema, the format data is stored for each field 
const loginschema = new Schema ({
lemil: {
    type: String,
    required: [true, 'email field is required']
},
tpassword: {
    type: String,
    required: [true, 'Password field is required']
}, 
vtpassword: {
    type: String,
    required: [true, 'Verify Password field is required']
}
});

//login model
var login = mongoose.model('logins', loginschema);

//exports model tutor for use during GET or POST requests
model.exports = login;

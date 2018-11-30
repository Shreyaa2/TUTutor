const mongoose = require('mongoose');

var tutuorschema = mongoose.Schema ({
    tfname: { type: String, required: true},
    tlname: {type: String, required: true},
    temail: { type: String},
    tpassword: { type: String, required: true}, 
    tvpassword: { type: String, required: true}, 
    tmajor: { type: String},
    tlevel: {type: String},
    tcourse: {type: String},
    trate: {type: Number},
    tdesc: {type: String },
});

var tutor = mongoose.model('tutor', tutuorschema, 'tutorinfo');
module.exports = tutor;

const mongoose = require('mongoose');

var adminschema = mongoose.Schema ({
    username: {type: String},
    password: {type: String}
});

var admin = mongoose.model('admin', adminschema, 'admins');
module.exports = admin;
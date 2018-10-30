var express = require('express');

var mongoose = require('mongoose');
const CONNECTION_URI= process.env.MONGODB_URI || 'mongodb://admin:cozysweater18!@ds223763.mlab.com:23763/towsont'
var app = express();

var port = process.env.PORT || 3000

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose.connect(CONNECTION_URI, {
    useMongoClient: true
})
.then(() => {
    console.log('Connected to mongo');
})
.catch(err => console.log(err)
);

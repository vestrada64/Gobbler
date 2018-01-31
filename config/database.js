var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gobbler');

var db = mongoose.connection;

db.once('open', () => console.log(`Connected to MongoDB on ${db.host}:${db.port}`));

db.on('error', function(err){
    console.error(`Database error:\n${err}`);
});
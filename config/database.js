var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

var db = mongoose.connection;



db.once('open', () => console.log(`Connected to MongoDB`));

db.on('error', function(err){
    console.error(`Database error:\n${err}`);
});

module.exports = mongoose
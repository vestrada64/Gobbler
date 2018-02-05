var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

var db = mongoose.connection;



db.once('open', () => console.log(`Connected to MongoDB on ${process.env.DATABASE_URL}`));

db.on('error', function(err){
    console.error(`Database error:\n${err}`);
});

module.exports = mongoose
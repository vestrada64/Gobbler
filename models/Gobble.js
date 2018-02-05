var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gobbleSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    likes: Array
}, {
    timestamps: true
});


module.exports = mongoose.model('Gobble', gobbleSchema);
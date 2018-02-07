var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gobbleSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
    timestamps: true
});


module.exports = mongoose.model('Gobble', gobbleSchema);
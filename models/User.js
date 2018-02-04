var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    googleId: String,
    gobbles: [{type: Schema.Types.ObjectId, ref: 'Gobble'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema)
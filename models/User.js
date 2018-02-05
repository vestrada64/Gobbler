var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    avatar: String,
    displayName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    googleId: String,
    twitterId: String,
    gobbles: [{type: Schema.Types.ObjectId, ref: 'Gobble'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema)
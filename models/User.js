var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    gobbles: [{type: Schema.Types.ObjectId, ref: 'Gobble'}]
}, {
    timestamps: true
});

mongoose.model('User', userSchema)
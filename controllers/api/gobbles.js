var User = require('../../models/User');
var Gobble = require('../../models/Gobble');



function createGobble(req, res) {
    console.log(req.body);
    var gobble = new Gobble(req.body);
    gobble.save(function(err) {
        if (err) console.log(err);
        req.user.gobbles.push(gobble._id);
        req.user.save(function(err) {
            req.user.populate('gobbles', function(err){
                res.status(201).json(req.user);
            });
        })
    })
}

function deleteGobble(req, res) {
    
    User.findOne(req.user._id)
    .then(function(user){
        console.log(user.gobbles.remove(req.params.id));
        user.save(function(err){
            res.status(201).json(user.gobbles)
        })
    })
    Gobble.findByIdAndRemove(req.params.id)
    .then(function(gobble){
        console.log('Gobble delete')
    })
}

function getAllGobbles(req, res) {
    Gobble.find({}, function(err, gobble) {
        res.status(200).json(gobble);
    });
}




module.exports = {
    createGobble,
    deleteGobble,
    getAllGobbles
}


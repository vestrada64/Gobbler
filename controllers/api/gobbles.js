var User = require('../../models/User');
var Gobble = require('../../models/Gobble');



function createGobble(req, res) {
    console.log(req.body);

    var gobble = new Gobble(req.body);
    gobble.save(function(err) {
        if (err) console.log(err);
        req.user.gobbles.push(gobble);
        req.user.save(function(err) {
            res.json(req.user).status(200);
        })

    })

}

function deleteGobble(req, res) {
    Gobble.findByIdAndRemove(req.params.id, function(err, gobble) {
        res.status(200).json(gobble);
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


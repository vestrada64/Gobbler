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

module.exports = {
    createGobble
}


var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/api/users');
var gobblesCtrl = require('../controllers/api/gobbles');

router.get('/users', usersCtrl.getAllUsers);
router.get('/users/:id', usersCtrl.getOneUser);
router.post('/users', usersCtrl.createUser);
router.delete('/users/:id', usersCtrl.deleteUser);

router.get('/gobbles', gobblesCtrl.getAllGobbles);
router.get('/gobbles/:id', gobblesCtrl.getOneGobble);
router.post('/gobbles', gobblesCtrl.createGobble);
router.delete('/gobbles/:id', gobblesCtrl.deleteGobble);
router.put('/gobbles', function(req, res) {
    gobblesCtrl.updateGobble
});
router.get('/gobbles/:id/edit', function(req, res){
    gobblesCtrl.editGobble
});


module.exports = router;


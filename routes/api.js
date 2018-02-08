var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/api/users');
var gobblesCtrl = require('../controllers/api/gobbles');

router.get('/users', usersCtrl.getAllUsers);
router.get('/users/:id', usersCtrl.getOneUser);
router.post('/users', usersCtrl.createUser);
router.delete('/users/:id', usersCtrl.deleteUser);

// router.get('/users/:id/gobbles/', usersCtrl.getUserGobbles);

router.get('/gobbles', gobblesCtrl.getAllGobbles);
router.get('/gobbles/:id', gobblesCtrl.getOneGobble);
router.post('/gobbles', gobblesCtrl.createGobble);
router.delete('/gobbles/:id', gobblesCtrl.deleteGobble);
router.put('/gobbles/:id', gobblesCtrl.updateGobble);

// router.delete('/users/:id/gobbles/:id', gobblesCtrl.deleteGobble);

// router.put('/users/:id/gobbles/:id', gobblesCtrl.updateGobble);

module.exports = router;
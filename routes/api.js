var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/api/users');

/* GET users listing. */
router.get('/users', usersCtrl.getAllUsers);

router.get('/users/:id', usersCtrl.getOneUser);

router.post('/users', usersCtrl.createUser);

router.delete('/users/:id', usersCtrl.deleteUser);

router.put('/users/:id', usersCtrl.updateUser);

module.exports = router;

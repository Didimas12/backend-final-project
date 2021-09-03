const express = require('express');
const router = express.Router();
const userController = require('../../src/controllers/userController');

router.get('/', userController.getUser);
router.post('/', userController.createUser);
router.put('/', userController.updateUser)

module.exports = router;
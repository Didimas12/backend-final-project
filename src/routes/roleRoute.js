const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

router.get('/', roleController.getRole);
router.post('/', roleController.createRole);
router.put('/', roleController.updateRole)

module.exports = router;
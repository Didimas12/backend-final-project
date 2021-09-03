const express = require('express');
const router = express.Router();
const kotaAsalController = require('../controllers/kotaAsalController');

router.post('/', kotaAsalController.createKotaAsal);
router.put('/', kotaAsalController.updateKotaAsal);
router.get('/', kotaAsalController.getKotaAsal);

module.exports = router;
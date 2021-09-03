const express = require('express');
const router = express.Router();
const kotaSekarangController = require('../controllers/kotaSekarangController')

router.get('/', kotaSekarangController.getKotaSekarang);
router.post('/', kotaSekarangController.createKotaSekarang);
router.put('/', kotaSekarangController.updateKotaAsal);

module.exports = router;
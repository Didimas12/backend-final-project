const express = require('express');
const router = express.Router();
const presensiController = require('../controllers/presensiControllers');

router.get('/', presensiController.getPresensi);
router.post('/', presensiController.createPresensi);
router.put('/', presensiController.updatePresensi);

module.exports = router;
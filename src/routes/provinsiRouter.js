const express = require('express');
const router = express.Router();
const provinsiController = require('../controllers/provinsiController');

router.get('/', provinsiController.getProvinsi);
router.post('/', provinsiController.createProvinsi);
router.put('/', provinsiController.updateProvinsi);

module.exports = router;
const express = require('express');
const router = express.Router();
const PekerjaanController = require('../controllers/pekerjaanController');

router.get('/', PekerjaanController.getPekerjaan);
router.post('/', PekerjaanController.createPekerjaan);
router.put('/', PekerjaanController.updatePekerjaan);

module.exports = router;
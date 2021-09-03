const express = require('express');
const router = express.Router();
const jadwalKelasController = require('../../src/controllers/jadwalKelasController')

router.get('/', jadwalKelasController.getJadwalKelas)
router.post('/', jadwalKelasController.createJadwalKelas)
router.put('/', jadwalKelasController.updateJadwalKelas)
module.exports = router;
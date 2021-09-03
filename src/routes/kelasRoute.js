const express = require('express')
const router = express.Router();
const kelasController = require('../controllers/kelasController')

router.post('/', kelasController.createKelas);
router.get('/', kelasController.getKelas);
router.put('/', kelasController.updateKelas);
module.exports = router
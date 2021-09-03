const express = require('express');
const router = express.Router();
const materiController = require('../controllers/materiController');

router.get('/', materiController.getMateri);
router.post('/', materiController.createMateri);
router.put('/', materiController.updateMateri);

module.exports = router;
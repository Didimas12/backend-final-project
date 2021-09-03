const express = require('express');
const router = express.Router();
const pendidikanController = require('../controllers/pendidikanController');

router.get('/', pendidikanController.getPendidikan);
router.post('/', pendidikanController.createPendidikan);
router.put('/', pendidikanController.updatePendidikan);

module.exports = router;
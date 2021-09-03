const express = require('express');
const router = express.Router();
const institusiController = require('../../src/controllers/institusiController');

router.get('/', institusiController.getInstitusi)
router.post('/', institusiController.createInstitusi)
router.put('/', institusiController.updateInstitusi)

module.exports = router;
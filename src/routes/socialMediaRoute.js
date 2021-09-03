const express = require('express')
const router = express.Router();
const socialMediaController = require('../controllers/socialMediaController');

router.get('/', socialMediaController.getSocialMedia);
router.post('/', socialMediaController.createSocialMedia);
router.put('/', socialMediaController.updateSocialMedia);
module.exports = router;
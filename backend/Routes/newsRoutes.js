const express = require('express');
const router = express.Router();
const newsletterController = require('../Controllers/newsController');

router.get('/newsletter', newsletterController.getNewsletterData);

module.exports = router;
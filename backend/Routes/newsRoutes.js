const express = require('express');
const router = express.Router();
const newsletterController = require('../Controllers/newsController');

router.get('/newsletter', newsletterController.getNewsletterData);
router.get('/toptech',newsletterController.getTopHeadlineTech);
router.get('/cryptonews',newsletterController.getCryptoNews);
router.get('/ainews',newsletterController.getAiNews);

module.exports = router;
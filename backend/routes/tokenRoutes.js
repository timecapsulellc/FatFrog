const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/tokenController');

// Get token information
router.get('/info', tokenController.getTokenInfo);

// Get token balance for an address
router.get('/balance/:address', tokenController.getBalance);

// Get token allowance
router.get('/allowance/:owner/:spender', tokenController.getAllowance);

module.exports = router;

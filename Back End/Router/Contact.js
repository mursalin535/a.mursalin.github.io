const express = require('express');
const router = express.Router();
const Contact_controller = require('../Controller/Contact_controller');

// POST /api/contact
router.post('/contact', Contact_controller);

module.exports = router;

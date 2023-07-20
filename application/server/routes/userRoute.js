const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');

// Define your route handlers here
router.get('/', tourController.getAllTours);

module.exports = router;

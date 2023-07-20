const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');

// Define  route handlers here
// clena up
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour)
  .patch(tourController.updateTour);

module.exports = router;

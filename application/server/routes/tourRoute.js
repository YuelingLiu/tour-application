const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');
const authController = require('../controllers/authController');

// Define  route handlers here
// clena up

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

// router
//   .route('/')
//   .get(tourController.getAllTours)
//   .post(
//     authController.protect,
//     authController.restrictTo('admin', 'guide-lead'),
//     tourController.createTour
//   );

// router
//   .route('/:id')
//   .patch(
//     authController.protect,
//     authController.restrictTo('admin', 'guide-lead'),
//     tourController.updateTour
//   )
//   .delete(
//     authController.protect,
//     authController.restrictTo('admin', 'guide-lead'),
//     tourController.deleteTour
//   );

module.exports = router;

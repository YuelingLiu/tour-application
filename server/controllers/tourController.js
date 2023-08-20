const Tour = require('../models/tourModel');
const catchAsync = require('./../utils/catchAsync');

// a top tours middleware

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  //alwasy need next for middleware\
  next();
};

exports.getAllTours = catchAsync(async (req, res, next) => {
  try {
    const tours = await Tour.find(); // Fetch tours from the database

    if (tours.length === 0) {
      console.log('no tours');
      return res.status(200).json({
        status: 'success',
        message: 'No tours found',
        data: {
          tours: [],
        },
      });
    }

    console.log('something in get all tour');

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch tours',
      error: err.message,
    });
  }
});

exports.createTour = catchAsync(async (req, res, next) => {
  try {
    const tour = await Tour.create(req.body);
    return res.status(201).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      message: 'Failed to create tour',
      error: err.message,
    });
  }
});

// update tour
exports.updateTour = catchAsync(async (req, res, next) => {
  console.log('In updateTour');
  console.log('Request Body:', req.body);

  try {
    console.log('Request Body:', req.body);
    console.log('Tour ID:', req.params.id);

    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    //console.log('Updated Tour:', tour);

    if (!tour) {
      return res.status(404).json({
        status: 'error',
        message: 'Tour not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    console.error('Error:', err);

    return res.status(400).json({
      status: 'error',
      message: 'Failed to update tour',
      error: err.message,
    });
  }
});

// get one tour

exports.deleteTour = catchAsync(async (req, res, next) => {
  console.log('Tour Id', req.params.id);
  try {
    const tour = await Tour.findOneAndDelete(req.params.id);

    if (!tour) {
      return res.status(404).json({
        status: 'error',
        message: 'Tour not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      message: 'Failed to delete tour',
      error: err.message,
    });
  }
});

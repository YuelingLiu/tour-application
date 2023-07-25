const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
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
};

exports.createTour = async (req, res) => {
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
};

// update tour
exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

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
      message: 'Failed to update tour',
      error: err.message,
    });
  }
};

exports.deleteTour = async (req, res) => {
  const tour = await Tour.findOneAndDelete(req.body.id, () => {
    return next();
  });
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

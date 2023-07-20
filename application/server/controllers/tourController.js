const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find(); // Fetch tours from the database

    if (tours.length === 0) {
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

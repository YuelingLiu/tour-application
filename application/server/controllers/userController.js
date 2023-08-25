const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

// we just inactive user not really delete them
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'sucess',
    data: null,
  });
});

// get one user using ID
exports.getUser = async (req, res) => {
  console.log('in getUser function');
  try {
    console.log('req.params.id', req.params);
    // wait for user to be found
    const user = await User.findById(req.params.id);

    // check if user found is a success or not
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // if found send status and data
    res.status(200).json({ status: 'success', data: { user } });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

// delete user
exports.deleteUser = async (req, res) => {
  console.log('in delete function');
  try {
    // get user by id
    const user = await User.findByIdAndDelete(req.params.id);

    // check if user found is a success or not
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // if success send message
    res.status(200).json({ status: 'success', data: null });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updateMyPassword.',
        400
      )
    );
  }
  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'name', 'email');
  if (req.file) filteredBody.photo = req.file.filename;

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

exports.createUser = (req, res) => {
  console.log(req.requestTime);
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined! Please use /signup',
  });
};

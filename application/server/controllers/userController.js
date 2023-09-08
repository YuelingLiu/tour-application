const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const multer = require('multer');
const AppError = require('./../utils/appError');

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

// this is a filter func filters stufd only include te specified fields/ propertie
const filterObj = (obj, ...allowedFields) => {
  // create an empty object to store the filtered fields
  const newObj = {}; //

  // iterate thru all props of the input obj
  Object.keys(obj).forEach((el) => {
    // check if the curr prop is in the list of allowed
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

// exports.updateUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined!',
//   });
// };

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
  console.log('from update me ');
  console.log(req.file);
  console.log(req.body);

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
  // tje req body contains data sent to POST REQUEST
  // and this only include 'name' and 'email'
  const filteredBody = filterObj(req.body, 'name', 'email');

  // if req file exist, req.file is used to handle file uploads , it means a file was uploaded
  // if req file exists, assigns the filename prop of req.file to photo
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

const express = require('express');
const multer = require('multer');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');
const { promisify } = require('promisify');
const router = express.Router();

const upload = multer({ dest: 'public/images' });

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

router.patch('/updateMyPassword', authController.updateMyPassword);
router.get('/me', userController.getMe, userController.getUser);
router.patch('/updateMe', upload.single('photo'), userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);

// these are only restrct to admin
router.use(authController.restrictTo('admin'));
router
  .route('/getAllUser')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  // .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;

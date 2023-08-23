const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.post('/resetPassword', authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

// yueling need to implement updatePassoword
// router.patch('/updateMyPassword', authController.updatePassword);

// inactive me
// router.delete('/deleteMe', userController.deleteMe);

// these are only restrct to admin
// router.use(authController.restrictTo('admin'));

//
// router
//   .route('/')
//   .get(userController.getAllUsers)
//   .post(userController.createUser);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;

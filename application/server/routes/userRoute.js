const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/forgotPassword', authController.forgotPassword);
router.post('/resetPassword', authController.resetPassword);

// // Define your route handlers here
// router.get('/', authController.getAllUsers);

module.exports = router;

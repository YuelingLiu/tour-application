const nodemailer = require('nodemailer');

const dotenv = require('dotenv');

// const sendEmail = (options) => {
//   // 1 create a transport
//   const transport = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },

//     // activate gmail "less secure app" option
//   });
//   // 2 define the emial options
//   // 3send the email
// };
dotenv.config();
const sgMail = require('@sendgrid/mail');
const { resetPassword } = require('../controllers/authController');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmail = async (options) => {
  const msg = {
    to: options.user.email, // User's email address
    // from: 'stellaliuca@gmail.com', // Your verified sender email address in SendGrid, i am gonna pass an obj here to change as Natours
    from: {
      name: 'Natours',
      email: 'stellaliuca@gmail.com',
    },

    subject: 'Password Reset',
    text: `Click the link to reset your password: ${options.link}`,
    // You can also use HTML content by using the 'html' property
  };

  try {
    await sgMail.send(msg);
    console.log('Password reset email sent');
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw new Error('Error sending email');
  }
};

module.exports = sendEmail;

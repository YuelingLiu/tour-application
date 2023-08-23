const nodemailer = require('nodemailer');

const sendEmail = (options) => {
  // 1 create a transport
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {},
  });
  // 2 define the emial options
  // 3send the email
};

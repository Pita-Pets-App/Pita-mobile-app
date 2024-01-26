const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ousseemacherif@gmail.com',
    pass: 'nxam fmub lvrn dzyp',
  },
});

module.exports = transporter;
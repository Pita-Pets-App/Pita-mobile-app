

const nodemailer = require('nodemailer');
const transporter = require('./emailConfig');

const sendEmail = async (recipient, subject, htmlContent) => {
  const mailOptions = {
    from: 'ousseemacherif@gmail.com', 
    to: recipient,
    subject,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${recipient}`);
  } catch (error) {
    console.error(`Error sending email to ${recipient}:`, error);
    throw error;
  }
};

module.exports = sendEmail;

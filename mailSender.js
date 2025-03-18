const nodemailer = require('nodemailer');
const mailSender = async (email, title, body) => {
  try {
    // Create a Transporter to send emails
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      auth: {
        user: 'urbantrax9@gmail.com',
        pass: 'jsixftscfmcmwzyw',
      }
    });
    // Send emails to users
    let info = await transporter.sendMail({
      from: 'urbantrax9@gmail.com - UrbanTrax',
      to: email,
      subject: title,
      html: body,
    });
    console.log("Email info: ", info);
    return info;
  } catch (error) {  
    console.log(error.message);
    return { status: false, message: error.message };
  }
};
module.exports = mailSender;
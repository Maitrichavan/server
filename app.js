const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
const mailSender = require('./mailSender')
const otpGenerator = require("otp-generator");
const app = express();
app.use(express.json());  

app.post("/otp",async (req,res)=>{
  const { email } = req.body
    // mailSender("krishpatel27x@gmail.com","trial","hello, krish")
    const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
      const emailBody = ` <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>UrbanTrax OTP Email</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f7f7f7;
        }
        .email-container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .email-header {
          background-color: #4CAF50;
          color: white;
          text-align: center;
          padding: 20px;
        }
        .email-header img {
          max-width: 100px;
          margin-bottom: 10px;
        }
        .email-body {
          padding: 20px;
          color: #333;
          line-height: 1.5;
        }
        .otp-box {
          display: inline-block;
          background-color: #f4f4f4;
          padding: 10px 20px;
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 2px;
          color: #4CAF50;
          border-radius: 4px;
          margin: 20px 0;
        }
        .email-footer {
          text-align: center;
          padding: 20px;
          font-size: 12px;
          color: #999;
          background: #f4f4f4;
        }
        .email-footer a {
          color: #4CAF50;
          text-decoration: none;
        }
        @media (max-width: 600px) {
          .email-body {
            padding: 15px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <!-- Email Header -->
        <div class="email-header">
          <h1>Welcome to UrbanTrax!</h1>
        </div>

        <!-- Email Body -->
        <div class="email-body">
          <p>Dear User,</p>
          <p>Thank you for signing up with UrbanTrax, your go-to restaurant app! To complete your registration or verify your account, please use the following One-Time Password (OTP):</p>
          
          <div class="otp-box">${otp}</div>
          
          <p>Please note that this OTP is valid for the next 10 minutes. If you didn’t request this, please ignore this email.</p>
          
          <p>Enjoy your experience with UrbanTrax!</p>
          <p>Best regards,<br>The UrbanTrax Team</p>
        </div>

        <!-- Email Footer -->
        <div class="email-footer">
          <p>If you have any questions, feel free to <a href="mailto:support@UrbanTrax.com">contact us</a>.</p>
          <p>© 2025 UrbanTrax. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>`;
    const info = mailSender(email, "OTP", emailBody);
    console.log("otp hai bhai :"+otp)
    res.status(200).json({ otp });
})

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});

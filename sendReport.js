const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

let mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_TO,
  subject: 'Playwright Test Report',
  text: 'Please find the attached Playwright test report.',
  attachments: [
    {
      filename: 'playwright-report.zip',
      path: './playwright-report.zip'
    }
  ]
};

transporter.sendMail(mailOptions, function(error, info){
  if(error){
    console.log('Error sending email:', error);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});
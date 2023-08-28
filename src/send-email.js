const nodemailer = require('nodemailer');

function sendEmail(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'diyhaven.blog@gmail.com',
      pass: 'qnxxilzragevrufa'
    },
  });

  const mailOptions = {
    from: email,
    to: 'lean.funte@gmail.com',
    subject: 'New Message from Contact Form',
    html: `
      <h2>Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send(error.message);
    } else {
      console.log('Email sent');
      res.status(200).send('Email sent');
    }
  });
}

module.exports = sendEmail;

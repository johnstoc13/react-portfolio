const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



"use strict";
const nodemailer = require("nodemailer");
const { Route } = require("react-router-dom");

// async..await is not allowed in global scope, must use a wrapper
async function main(data) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${data.name}" <${data.email}>`, // sender address
    to: "bar@example.com, baz@example.com,", // list of receivers
    subject: "CJ Portfolio Inquiry", // Subject line
    text: `${data.message}`, // plain text body
    html: `${data.message}`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

app.post("/react-portfolio/contact", (req, res) => {
    main(req.body).then(res.sendStatus(200)).catch(res.send(console.error));
})


// Start server so it can begin listening to client requests
app.listen(PORT, function() {
  // Log when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
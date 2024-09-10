const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.MAIL}`,
      pass: `${process.env.MAILPASS}`,
    },
  });
  
  exports.sendEmail = async (email, subject, text) => {
    const mailOptions = {
      from: `${process.env.MAIL}`,
      to: email,
      subject: subject,
      text: text,
    };
  
    await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Correo enviado "+ info.response);
      }
    });
  };
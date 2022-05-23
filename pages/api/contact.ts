/* eslint-disable @typescript-eslint/naming-convention */
import nodemailer from "nodemailer";
import * as AWS from "aws-sdk";

// Set Admin Email on .env
const email = process.env.MAILADRESS;

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_MAIL,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_MAIL,
  region: process.env.AWS_REGION_MAIL,
});

AWS.config.getCredentials(function (error) {
  if (error) {
    console.log("ERROR:getCredentials: " + error.stack);
  }
});
const ses = new AWS.SES({ apiVersion: "2010-12-01" });

// Create a transporter of nodemailer
const transporter = nodemailer.createTransport({
  SES: ses,
});
const mailer = ({ senderMail, name, phone, text }) => {
  const from = `${name} <${senderMail}>`;
  const message = {
    from,
    to: `${email}`,
    subject: `New contact from ${name} | eric.milfont.net`,
    text: `Hi Eric, below there is a new message from the website.

    Name: ${name} 
    Email: ${senderMail} 
    Phone: ${phone} 
    Message: 
    ${text} 
    
    Sent by contact form on https://eric.milfont.net
    `,
    replyTo: `${senderMail}`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

const mailerfeedback = ({ senderMail, name, phone, text }) => {
  const from = `Eric Milfont <eric@milfont.net>`;
  const message = {
    from,
    to: `${senderMail}`,
    subject: `Your message has been received. | eric.milfont.net`,
    text: `
    Hi ${name}, how are you doing?
    
    I've just received your message and I will get back to you soon.
    
    Have a great day!
    
    Best regards,
    Eric Milfont
    eric@milfont.net
    +55 81 98139-2929
    
    
    Sent by contact form on https://eric.milfont.net
    `,
    replyTo: `eric@milfont.net`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

export default async (req, res) => {
  const { senderMail, name, phone, content } = req.body;

  if (senderMail === "" || content === "") {
    res.status(403).send();
    return;
  }

  const mailerRes = await mailer({ senderMail, name, phone, text: content });
  const mailerResFb = await mailerfeedback({
    senderMail,
    name,
    phone,
    text: content,
  });
  res.send(mailerRes);
  res.send(mailerResFb);
};

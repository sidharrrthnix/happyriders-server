import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API || "",
  domain: "sandbox29d1906833604de9b192db8ffedd2c3f.mailgun.org",
});

const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: "sidharrthnix@gmail.com",
    to: "sidharrthnix@gmail.com",
    subject,
    html,
  };
  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello! ${fullName}, please verify your email`;
  const emailBody = `Verify your ${key} email by clicking <a href="http://happyriders.com/verification/${key}/">here</a>`;
  return sendEmail(emailSubject, emailBody);
};

import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
type EmailConfig = {
  destinationUser: string;
  subjectText: string;
  htmlOption: string;
};
const MailServer = async ({
  destinationUser,
  subjectText,
  htmlOption,
}: EmailConfig) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "vso3@cin.ufpe.br",
    port: 465,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: destinationUser,
    subject: subjectText,
    html: htmlOption,
  });
};

export { MailServer };

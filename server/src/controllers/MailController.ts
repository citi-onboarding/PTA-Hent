import { MailServer } from "../services/MailServer";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();
const SendMail = async (request: Request, response: Response) => {
  try {
    const { name, email, message } = request.body;
    await MailServer({
      destinationUser: process.env.EMAIL || "",
      subjectText: `Nodemailer funcionando`,
      htmlOption: `<p> O/a ${name} enviou uma mensagem: ${message} </p>`,
    });
    return response.status(200).send({ answer: "Email enviado com sucesso!" });
  } catch (error) {
    return response.status(500).send({ answer: "Erro ao enviar email." });
  }
};
export { SendMail };

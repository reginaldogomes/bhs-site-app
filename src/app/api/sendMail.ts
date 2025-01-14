import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

// Configure a API Key do SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }

  try {
    const msg = {
      to: "contato@bhsolutions.com.br", // Altere para o e-mail que receberá as mensagens
      from: "no-reply@seu-dominio.com", // Altere para o e-mail do remetente configurado no SendGrid
      subject: `Nova mensagem de ${name}`,
      html: `
        <h1>Você recebeu uma nova mensagem</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    };

    await sgMail.send(msg);
    return res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao enviar o e-mail." });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido." });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  try {
    const msg = {
      to: "contato@bhsolutions.com.br", // Substitua pelo e-mail de destino
      from: "nao-responda@meudominio.com", // Substitua pelo seu e-mail autorizado no SendGrid
      subject: `Nova mensagem de contato de ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    };

    await sgMail.send(msg);

    return res.status(200).json({ success: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return res.status(500).json({ error: "Erro ao enviar a mensagem." });
  }
}

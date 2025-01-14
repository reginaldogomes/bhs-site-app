import type { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  try {
    await sendgrid.send({
      to: "contato@bhsolutions.com.br",
      from: "contato@bhsolutions.com.br",
      subject: `Novo contato de ${name}`,
      html: `
        <h1>Novo contato pelo site</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ message: "E-mail enviado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao enviar o e-mail" });
  }
}

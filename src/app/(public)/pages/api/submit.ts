import type { NextApiRequest, NextApiResponse } from "next";
import { sendLeadToZoho } from "@/lib/zoho/zoho";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const {
    name,
    email,
    phone = "N/A",
    message = "Enviado via formulário básico",
  } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Nome e e-mail são obrigatórios." });
  }

  try {
    const result = await sendLeadToZoho({ name, email, phone, message });
    console.log("Resposta do Zoho CRM:", JSON.stringify(result, null, 2));
    return res.status(200).json({ success: true, result });
  } catch (error: any) {
    console.error(
      "Erro na API Zoho Lead:",
      error.response?.data || error.message || error
    );
    return res
      .status(500)
      .json({
        error: "Erro ao processar sua solicitação.",
        detail: error.response?.data || error.message,
      });
  }
}

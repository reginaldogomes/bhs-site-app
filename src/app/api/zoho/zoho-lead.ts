import type { NextApiRequest, NextApiResponse } from "next";
import { sendLeadToZoho } from "@/lib/zoho/zoho";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    await sendLeadToZoho(req.body); // nome, email, telefone, mensagem
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro Zoho:", error);
    res.status(500).json({ error: "Erro ao enviar para o Zoho CRM" });
  }
}

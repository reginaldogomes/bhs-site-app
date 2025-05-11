import { NextResponse } from "next/server";
import { sendLeadToZoho } from "@/lib/zoho";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const result = await sendLeadToZoho({
      name,
      email,
      phone: "Não informado",
      message,
    });

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error(
      "Erro Zoho CRM:",
      error.response?.data || error.message || error
    );
    return NextResponse.json(
      {
        error: "Erro ao salvar no Zoho CRM.",
        detail: error.response?.data || error.message || error,
      },
      { status: 500 }
    );
  }
}

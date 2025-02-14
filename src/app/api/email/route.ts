import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const data: EmailRequest = await req.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 },
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const toEmail = process.env.RESEND_TO_EMAIL;

    if (!fromEmail || !toEmail) {
      return NextResponse.json(
        { error: "Configuração de e-mail inválida no ambiente." },
        { status: 500 },
      );
    }

    const response = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Novo contato de ${data.name}`,
      text: `Nome: ${data.name}\nE-mail: ${data.email}\nMensagem: ${data.message}`,
    });

    if (response.error) {
      throw new Error(response.error.message);
    }

    return NextResponse.json({
      message: "E-mail enviado com sucesso!",
      response,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido ao enviar e-mail.";

    console.error("Erro ao enviar e-mail:", errorMessage);

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

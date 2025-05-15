import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body: ContactRequest = await req.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"${body.name}" <${process.env.SMTP_USER}>`,
      replyTo: body.email,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: "Novo contato via site",
      html: `
        <p><strong>Nome:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${body.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro interno ao processar a solicitação." },
      { status: 500 }
    );
  }
}

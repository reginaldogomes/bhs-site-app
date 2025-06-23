// src/app/api/send-lead/route.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message, page } = await req.json();

  if (!name || !email || !message || !page) {
    return NextResponse.json(
      { error: "Campos obrigatórios faltando." },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY,
      },
    });

    await transporter.sendMail({
      from: process.env.SENDGRID_FROM_EMAIL,
      to: process.env.SENDGRID_TO_EMAIL,
      subject: `Novo lead - ${page}`,
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}\nPágina: ${page}`,
      html: `
        <h2>Novo Lead Capturado</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
        <p><strong>Página:</strong> ${page}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erro ao enviar email:", err);
    return NextResponse.json(
      { error: "Erro ao enviar email." },
      { status: 500 }
    );
  }
}

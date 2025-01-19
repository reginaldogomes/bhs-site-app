import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
  region: "us-east-1",
});

export async function POST(req: Request) {
  try {
    const { to, subject, message } = await req.json();

    if (!to || !subject || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 },
      );
    }

    const params = {
      Source: "contato@bhsolutions.com.br",
      Destination: { ToAddresses: [to] },
      Message: {
        Subject: { Data: subject },
        Body: { Text: { Data: message } },
      },
    };

    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error("Erro completo:", error);
    return NextResponse.json(
      { error: "Erro ao enviar e-mail.", details: error },
      { status: 500 }
    );
  }
  
}

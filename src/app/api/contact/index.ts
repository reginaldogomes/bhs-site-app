// api/contact/index.ts
import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const TO_EMAIL = process.env.SENDGRID_TO_EMAIL;
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL;

if (!SENDGRID_API_KEY || !TO_EMAIL || !FROM_EMAIL) {
  throw new Error(
    "Variáveis de ambiente do SendGrid não configuradas corretamente."
  );
}

sgMail.setApiKey(SENDGRID_API_KEY);

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    context.res = {
      status: 400,
      body: { error: "Os campos nome, email e mensagem são obrigatórios." },
    };
    return;
  }

  // Validação simples de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    context.res = {
      status: 400,
      body: { error: "Endereço de e-mail inválido." },
    };
    return;
  }

  const msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    replyTo: email,
    subject: `Novo contato de ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
  };

  try {
    await sgMail.send(msg);
    context.res = {
      status: 200,
      body: { success: true, message: "E-mail enviado com sucesso." },
    };
  } catch (error: any) {
    context.log.error(
      "Erro ao enviar email:",
      error?.response?.body || error.message
    );
    context.res = {
      status: 500,
      body: { error: "Erro ao enviar o e-mail. Tente novamente mais tarde." },
    };
  }
};

export default httpTrigger;

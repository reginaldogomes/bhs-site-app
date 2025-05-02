import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { ZOHO_REFRESH_TOKEN, ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET } =
      process.env;

    if (!ZOHO_REFRESH_TOKEN || !ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET) {
      return res
        .status(500)
        .json({
          error: "Variáveis de ambiente Zoho não definidas corretamente.",
        });
    }

    const tokenResponse = await axios.post(
      "https://accounts.zoho.com/oauth/v2/token",
      null,
      {
        params: {
          refresh_token: ZOHO_REFRESH_TOKEN,
          client_id: ZOHO_CLIENT_ID,
          client_secret: ZOHO_CLIENT_SECRET,
          grant_type: "refresh_token",
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;
    console.log("Access Token Verificado:", accessToken);

    // Verificação simples com endpoint de módulos
    const testResponse = await axios.get(
      "https://www.zohoapis.com/crm/v2/settings/modules",
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
        },
      }
    );

    return res
      .status(200)
      .json({
        success: true,
        accessToken,
        modules: testResponse.data.modules.map((m: any) => m.api_name),
      });
  } catch (error: any) {
    console.error(
      "Erro ao verificar token:",
      error.response?.data || error.message
    );
    return res
      .status(500)
      .json({
        error: "Falha ao verificar token do Zoho",
        detail: error.response?.data || error.message,
      });
  }
}

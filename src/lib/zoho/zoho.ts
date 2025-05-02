import axios, { AxiosError } from "axios";

interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ZohoAccessTokenResponse {
  access_token: string;
}

const ZOHO_API_BASE = "https://www.zohoapis.com/crm/v2";

export async function sendLeadToZoho(data: ContactData) {
  const accessToken = await getZohoAccessToken();

  const payload = {
    data: [
      {
        Last_Name: data.name,
        Email: data.email,
        Phone: data.phone,
        Description: data.message,
      },
    ],
  };

  try {
    const response = await axios.post(`${ZOHO_API_BASE}/Contacts`, payload, {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error, "enviar contato para o Zoho CRM");
  }
}

async function getZohoAccessToken(): Promise<string> {
  const { ZOHO_REFRESH_TOKEN, ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET } =
    process.env;

  if (!ZOHO_REFRESH_TOKEN || !ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET) {
    throw new Error(
      "Variáveis de ambiente do Zoho não definidas corretamente."
    );
  }

  try {
    const { data } = await axios.post<ZohoAccessTokenResponse>(
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

    return data.access_token;
  } catch (error) {
    handleAxiosError(error, "obter token de acesso do Zoho");
  }
}

function handleAxiosError(error: unknown, context: string): never {
  const axiosError = error as AxiosError;
  const errorData = axiosError.response?.data || axiosError.message;
  console.error(`Erro ao ${context}:`, JSON.stringify(errorData, null, 2));
  throw new Error(`Falha ao ${context}.`);
}

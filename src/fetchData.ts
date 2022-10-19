import axios from "axios";
import https from "https";

export const fetchJsonSwagger = async () => {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  try {
    const response = await axios.get(
      `${process.env.BACKEND_BASE_URL}${process.env.SWAGGER_ENDPOINT}`,
      {
        httpsAgent: agent,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch", error);
  }
};

import axios from "axios";

export const createPortfolio = async (payload: any) => {
  const token = axios.defaults.headers.common["Authorization"];
  try {
    const response = await axios.post(
      `${process.env.EXPO_PUBLIC_IP_API}/api/portfolio`,
      payload,
      { headers: { Authorization: token } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
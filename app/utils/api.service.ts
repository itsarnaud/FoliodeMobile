import axios from "axios";

export const createPortfolio = async (payload: any) => {
  const token = axios.defaults.headers.common["Authorization"];
  try {
    const response = await axios.post(
      `http://192.168.137.22:8081/api/portfolio`,
      payload,
      { headers: { Authorization: token } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
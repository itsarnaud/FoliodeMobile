import axios from 'axios';

import { IP_API } from '@env';


export const loginUser = async (userData: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await axios.post(`${IP_API}/api/user/signin`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const registerUser = async (userData: {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${IP_API}/api/user/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

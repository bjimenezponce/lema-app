import axios from "axios";
//para patron adapter
const NEXT_PUBLIC_API_BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

export const get = async (url: any, options = {}) => {
  try {
    const response = await axios.get(`${NEXT_PUBLIC_API_BASE_URL}/${url}`, options);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

export const post = async (url: string, data: any, options = {}) => {
  try {
    const response = await axios.post(`${NEXT_PUBLIC_API_BASE_URL}/${url}`, data, options);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error posting data: ${error.message}`);
  }
};

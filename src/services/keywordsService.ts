import axios from '../utils/axios/axios';
import { AxiosResponse } from 'axios';

const apiUrl: string = `${import.meta.env.VITE_API_URL}/keywords` as string;

export const getAllKeywords = async (): Promise<AxiosResponse> => {
    return axios.get(`${apiUrl}`);
};

export const createKeyword = async (): Promise<AxiosResponse> => {
    return axios.post(`${apiUrl}`);
};

// export const deleteKeyword = async (id: string): Promise<AxiosResponse> => {
//   return axios.delete(`${apiUrl}/${id}`)
// }

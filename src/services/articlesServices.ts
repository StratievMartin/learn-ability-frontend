import axios from '../utils/axios/axios';
import { AxiosResponse } from 'axios';

const apiUrl: string = `${import.meta.env.VITE_API_URL}/articles` as string;
export const getAllArticles = async (): Promise<AxiosResponse> => {
    return axios.get(`${apiUrl}`);
};

export const getArticle = async (id: string): Promise<AxiosResponse> => {
    return axios.get(`${apiUrl}/${id}`);
};

export const getArticlesByKeyword = async (
    keywordId: string
): Promise<AxiosResponse> => {
    return axios.get(`${apiUrl}/kwd/${keywordId}`);
};

export const addArticle = async (data: object): Promise<AxiosResponse> => {
    return axios.post(`${apiUrl}`, data);
};

export const updateArticle = async (
    id: string,
    data: object
): Promise<AxiosResponse> => {
    return axios.put(`${apiUrl}/${id}`, data);
};

export const deleteArticle = async (id: string): Promise<AxiosResponse> => {
    return axios.delete(`${apiUrl}/${id}`);
};

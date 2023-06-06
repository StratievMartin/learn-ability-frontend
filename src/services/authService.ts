import axios from '../utils/axios/axios'
import { AxiosResponse } from 'axios'

const apiUrl: string = `${import.meta.env.VITE_API_URL}/auth` as string

export const getUserMe = async (id: string): Promise<AxiosResponse> => {
  return axios.get(`${apiUrl}/${id}`)
}
export const signIn = async (data: object): Promise<AxiosResponse> => {
  return axios.post(`${apiUrl}/signIn`, data)
}
export const signUp = async (data: object): Promise<AxiosResponse> => {
  return axios.post(`${apiUrl}/signUp`, data)
}
export const updateUser = async (
  id: string,
  data: object
): Promise<AxiosResponse> => {
  return axios.put(`${apiUrl}/${id}`, data)
}
export const deleteUser = async (id: string): Promise<AxiosResponse> => {
  return axios.delete(`${apiUrl}/${id}`)
}

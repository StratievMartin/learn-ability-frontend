import axios from '../utils/axios/axios'
import { AxiosResponse } from 'axios'

const apiUrl: string = `${import.meta.env.VITE_API_URL}/courses` as string
export const getAllCourses = async (): Promise<AxiosResponse> => {
  return axios.get(`${apiUrl}`)
}
export const getCourse = async (id: string): Promise<AxiosResponse> => {
  return axios.get(`${apiUrl}/${id}`)
}
export const getCoursesByKeyword = async (
  keywordId: string
): Promise<AxiosResponse> => {
  return axios.get(`${apiUrl}/kwd/${keywordId}`)
}
export const addCourse = async (data: object): Promise<AxiosResponse> => {
  return axios.post(`${apiUrl}`, data)
}
export const updateCourse = async (
  id: string,
  data: object
): Promise<AxiosResponse> => {
  return axios.put(`${apiUrl}/${id}`, data)
}
export const deleteCourse = async (id: string): Promise<AxiosResponse> => {
  return axios.delete(`${apiUrl}/${id}`)
}

import axios from '../utils/axios/axios'

const apiUrl = `${import.meta.env.VITE_API_URL}/courses`

export const getAllCourses = async () => {
  return axios.get(`${apiUrl}`)
}
export const getCourse = async (id) => {
  return axios.get(`${apiUrl}/${id}`)
}
export const addCourse = async (data) => {
  return axios.post(`${apiUrl}/`, data)
}
export const updateCourse = async (id, data) => {
  return axios.put(`${apiUrl}/${id}`, data)
}
export const deleteCourse = async (id) => {
  return axios.delete(`${apiUrl}/${id}`)
}

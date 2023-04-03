import axios from '../utils/axios/axios'

const apiUrl = `${import.meta.env.VITE_API_URL}/courses`

export function getAllCourses() {
  return axios.get(`${apiUrl}`)
}
export function getCourse(id) {
  return axios.get(`${apiUrl}/${id}`)
}
export function addCourse(data) {
  return axios.post(`${apiUrl}/`, data)
}
export function updateCourse(id, data) {
  return axios.put(`${apiUrl}/${id}`, data)
}
export function deleteCourse(id) {
  return axios.delete(`${apiUrl}/${id}`)
}
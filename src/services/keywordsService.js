import axios from '../utils/axios/axios'

const apiUrl = `${import.meta.env.VITE_API_URL}/keywords`

export function getAllKeywords() {
  return axios.get(`${apiUrl}`)
}
import axios from '../utils/axios/axios'

const apiUrl = `${import.meta.env.VITE_API_URL}/keywords`

export const getAllKeywords = async () => {
  return axios.get(`${apiUrl}`)
}

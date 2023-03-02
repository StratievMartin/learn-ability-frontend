import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    //  Authorization: `<Your Auth Token>`,
    'Content-Type': 'application/json',
    // timeout: 10000,
  },
})

export default instance

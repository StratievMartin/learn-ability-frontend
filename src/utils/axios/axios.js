import axios from 'axios'
import { renewToken } from '../../services/authService'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    //  Authorization: `<Your Auth Token>`,
    'Content-Type': 'application/json',
    // timeout: 10000,
  },
})
export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    //  Authorization: `<Your Auth Token>`,
    'Content-Type': 'application/json',
    // timeout: 10000,
  },
})
authInstance.interceptors.request.use(
  (config) => {
    // Get the refresh token from localStorage
    const user = JSON.parse(localStorage.getItem('user'))
    const refreshToken = user.refreshToken

    // Add the access token to the Authorization header
    // const accessToken = localStorage.getItem('accessToken');
    const accessToken = user.accessToken

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    // Check if the refresh token exists and is not expired
    if (refreshToken && !isTokenExpired(refreshToken)) {
      // If the access token is missing or expired, renew the tokens
      if (!accessToken || isTokenExpired(accessToken)) {
        return renewTokens(refreshToken)
          .then((user) => {
            config.headers.Authorization = `Bearer ${user.accessToken}`
            localStorage.setItem('accessToken', user.accessToken)
            localStorage.setItem('refreshToken', user.refreshToken)
            return config
          })
          .catch((error) => {
            // Handle token renewal failure (e.g., logout user, show an error message)
            // For example, you can dispatch an action to clear the user data from the store
            // and redirect the user to the login page.
            console.error('Token renewal failed:', error)
            return config
          })
      }
    }

    return config
  },
  (error) => Promise.reject(error)
)

// Helper function to check if a token is expired
function isTokenExpired(token) {
  const decodedToken = decodeToken(token)
  return decodedToken.exp * 1000 < Date.now()
}

// Helper function to decode the JWT token
function decodeToken(token) {
  const decoded = jwt_decode(token)
  console.log('decode', decoded)
  return decoded
}

export default axiosInstance

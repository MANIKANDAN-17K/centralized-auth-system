import axios from 'axios'

const BASE_URL = import.meta.env.VITE_AUTH_BASE_URL

export const signup = async (username, email, password) => {
  const response = await axios.post(`${BASE_URL}/signup`, {
    username,
    email,
    password,
  })
  return response.data
}

export const login = async (usernameOrEmail, password) => {
  const response = await axios.post(`${BASE_URL}/login`, {
    usernameOrEmail,
    password,
  })
  return response.data
}

export const verifyToken = async (token) => {
  const response = await axios.get(`${BASE_URL}/verify`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
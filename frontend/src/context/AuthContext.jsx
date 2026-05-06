import { createContext, useContext, useState, useEffect } from 'react'
import { login as loginApi, signup as signupApi } from '../services/authService'
import { saveAuth, clearAuth, getToken, getUser } from '../utils/tokenStorage'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser())
  const [token, setToken] = useState(getToken())
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken())

  const login = async (usernameOrEmail, password) => {
    const data = await loginApi(usernameOrEmail, password)
    const userData = {
      id: data.id,
      username: data.username,
      email: data.email,
      role: data.role,
    }
    saveAuth(data.token, userData)
    setToken(data.token)
    setUser(userData)
    setIsAuthenticated(true)
    return data
  }

  const signup = async (username, email, password) => {
    const data = await signupApi(username, email, password)
    return data
  }

  const logout = () => {
    clearAuth()
    setToken(null)
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider')
  return context
}
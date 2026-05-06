export const saveAuth = (token, user) => {
  localStorage.setItem('auth_token', token)
  localStorage.setItem('auth_user', JSON.stringify(user))
}

export const getToken = () => localStorage.getItem('auth_token')

export const getUser = () => {
  const user = localStorage.getItem('auth_user')
  return user ? JSON.parse(user) : null
}

export const clearAuth = () => {
  localStorage.removeItem('auth_token')
  localStorage.removeItem('auth_user')
}

export const isLoggedIn = () => !!getToken()
import { createContext, useState, useMemo } from 'react'
import Cookies from 'js-cookie'

export const AuthContext = createContext('')

// Context to manage auth token
export function AuthContextProvider({ children }) {
  // Method to check if auth token is stored in cookie or session storage
  const getAuth = () => {
    const userCookie = Cookies.get('user')
    const userSession = sessionStorage.getItem('user')
    const userData = userCookie || userSession
    if (userData === null) {
      return null
    }
    return JSON.parse(userData)
  }

  const data = getAuth()
  const [user, setUser] = useState(data)

  // Save methods with memo to update provider only when user changes
  const value = useMemo(() => {
    const handleLogin = async (data) => {
      await setUser(data)
      return data
    }

    const handleLogout = async () => {
      await setUser(null)
      return null
    }

    return {
      user,
      onLogin: handleLogin,
      onLogout: handleLogout,
    }
  }, [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

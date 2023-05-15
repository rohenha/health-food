import { createContext, useState, useMemo } from 'react'
import Cookies from 'js-cookie'

export const AuthContext = createContext('')

export function AuthContextProvider({ children }) {
  console.log('render Auth Context')
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

  // const updateAuth = () => {
  //   const newUser = getAuth()
  //   setUser(newUser)
  // }

  const value = useMemo(() => {
    const handleLogin = async (data) => {
      await setUser(data)
    }

    const handleLogout = async () => {
      await setUser(null)
    }

    return {
      user,
      onLogin: handleLogin,
      onLogout: handleLogout,
    }
  }, [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

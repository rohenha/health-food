import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Auth({ children }) {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  useEffect(() => {
    const checkUserToken = () => {
      const userToken = localStorage.getItem('user-token')
      if (!userToken || userToken === 'undefined') {
        setIsLoggedIn(true)
        return navigate('/')
      }
      setIsLoggedIn(true)
    }

    checkUserToken()
  }, [isLoggedIn])
  return <>{isLoggedIn ? children : null}</>
}

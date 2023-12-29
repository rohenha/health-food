import { onLogin, onLogout } from '@store/auth'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

export default function useAuth() {
  const navigate = useNavigate()

  return {
    onLogin: useCallback(
      async (form) => {
        const response = await onLogin(form)
        if (response) {
          navigate('/app')
        }
      },
      [onLogin, navigate]
    ),
    onLogout: useCallback(
      async (url = '/sign-in') => {
        const response = await onLogout()
        if (response) {
          navigate(url)
        }
      },
      [onLogout, navigate]
    ),
  }
}

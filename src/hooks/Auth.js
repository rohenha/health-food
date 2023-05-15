import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import { AuthContext } from '@contexts/AuthContext'
import useToasts from '@hooks/Toasts'
import { signIn } from '@libs/strapi'

export default function useAuth() {
  const { onLogout, onLogin } = useContext(AuthContext)
  const { pushToast } = useToasts()
  const navigate = useNavigate()

  return {
    onLogin: useCallback(
      async (form) => {
        const data = await signIn(form)
        if (data.jwt) {
          const userData = { ...data.user, token: data.jwt }
          const userDataString = JSON.stringify(userData)
          if (form.remember === 'true') {
            Cookies.set('user', userDataString, { expires: 30 })
          }
          sessionStorage.setItem('user', userDataString)
          await onLogin(userData)
          pushToast({
            title: '',
            content: 'Bon retour parmis nous !',
            state: 'success',
          })
          navigate('/app')
        } else {
          // pushToast({
          //   title: '',
          //   content: data.error.message,
          //   state: 'error',
          //   duration: 5,
          // })
        }
      },
      [pushToast]
    ),
    onLogout: useCallback(
      async (url = '/sign-in') => {
        Cookies.remove('user')
        sessionStorage.removeItem('user')
        await onLogout()
        pushToast({
          title: '',
          content: 'Vous avez bien été déconnecté',
          state: 'success',
        })
        navigate(url)
      },
      [onLogout, pushToast, navigate]
    ),
  }
}

import { signal, computed } from "@preact/signals-react";
import Cookies from 'js-cookie'
// import { useNavigate } from 'react-router-dom'

import { signIn } from '@libs/strapi'

const getAuth = () => {
  const userCookie = Cookies.get('user')
  const userSession = sessionStorage.getItem('user')
  const userData = userCookie || userSession
  if (userData === null) {
    return null
  }
  return JSON.parse(userData)
}

export const user = signal(getAuth()); //the default state

//derived state based on whether a user exists
export const isLoggedIn = computed(() => {
  return !!user.value;
});

export const onLogin = async (form) => {
  const data = await signIn(form)

  if (data.jwt) {
    const userData = { ...data.user, token: data.jwt }
    const userDataString = JSON.stringify(userData)
    if (form.remember === 'true') {
      Cookies.set('user', userDataString, { expires: 30 })
    }
    sessionStorage.setItem('user', userDataString)
    user.value = data
    return data
    // success login

  } else {
    return null
    // error
  }
}

export const onLogout = async () => {
  Cookies.remove('user')
  sessionStorage.removeItem('user')
  user.value = null
  return true
  // Success logout
}

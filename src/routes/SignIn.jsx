import { useCallback } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

import Button from '@components/atoms/Button'
import InputField from '@components/atoms/InputField'
import InputReducer from '@hooks/InputReducer'

export default function SignIn() {
  const navigate = useNavigate()
  const [form, formDispatch] = InputReducer({
    identifier: '',
    password: '',
  })

  const handleChange = useCallback((event) => {
    formDispatch({ target: event.target, type: 'update' })
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(form)
    const login = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/api/auth/local`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      }
    )
    const loginResponseData = await login.json()
    console.log(loginResponseData)
    if (form.remember_me) {
      Cookies.set('token', loginResponseData.jwt, { expires: 30 })
      Cookies.set('user', JSON.stringify(loginResponseData.user), {
        expires: 30,
      })
    }
    sessionStorage.setItem('token', loginResponseData.jwt)
    sessionStorage.setItem('user', JSON.stringify(loginResponseData.user))
    navigate('/app')
  }

  return (
    <div className="t-signIn">
      <div className="row">
        <div className="column-16 offset-4 md-column-12 md-offset-6">
          <h1>Sign In</h1>
          <form action="" onSubmit={handleSubmit}>
            <InputField
              label="Email"
              type="email"
              name="identifier"
              placeholder="test@test.com"
              value={form.name}
              required={true}
              onChange={handleChange}
            />
            <InputField
              label="Mot de passe"
              type="password"
              name="password"
              placeholder="******"
              value={form.name}
              required={true}
              onChange={handleChange}
            />
            <Button className=" -primary" type="submit">
              Se connecter
            </Button>
            <Button className=" -secondary" url="/sign-up">
              S'inscrire
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

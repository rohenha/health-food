import { useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Button from '@components/atoms/Button'
import InputField from '@components/atoms/InputField'

import useAuth from '@hooks/Auth'

const schema = yup
  .object({
    identifier: yup.string().required("Vous devez remplir l'identifiant"),
    password: yup.string().required('Veuillez entrer un mot de passe'),
  })
  .required()

export default function SignIn() {
  const { onLogin } = useAuth()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  })

  // const { errors } = formState
  // const getErrors = useCallback((name) => {
  //   return formState.errors[name]
  // }, [])

  // const errors = useMemo(() => {
  //   return formState.errors
  // }, [formState.errors])

  const onSubmit = useMemo(() => {
    return async (data) => {
      // console.log(data)
      await onLogin(data, '/app')
    }
  }, [])

  console.log('init sign in')

  return (
    <div className="t-signIn">
      <div className="row">
        <div className="column-16 offset-4 md-column-12 md-offset-6">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              label="Email ou Username"
              type="text"
              name="identifier"
              placeholder="test@test.com"
              register={register}
              errors={errors.identifier}
              // control={control}
            />
            <InputField
              label="Mot de passe"
              type="password"
              name="password"
              placeholder="******"
              register={register}
              errors={errors.password}
              // control={control}
            />
            <InputField
              type="checkbox"
              name="remember"
              register={register}
              control={control}
              options={[
                {
                  value: true,
                  content: 'Se souvenir de moi',
                  name: 'remember',
                },
              ]}
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

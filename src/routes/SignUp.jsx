import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Button from '@components/atoms/Button'
import InputField from '@components/atoms/InputField'

import useToasts from '@hooks/Toasts'
import { signUp } from '@libs/strapi'

const schema = yup
  .object({
    email: yup
      .string()
      .email('Veuillez saisir un email valide')
      .required("Vous devez saisir l'email"),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    password: yup.string().required('Veuillez entrer un mot de passe'),
  })
  .required()

export default function SignUp() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  })
  const errors = useMemo(() => {
    return formState.errors
  }, [formState.errors])

  const onSubmit = async (data) => {
    const loginData = await signUp(data)
    console.log(loginData)
  }

  return (
    <div className="t-signIn">
      <div className="row">
        <div className="column-16 offset-4 md-column-12 md-offset-6">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              label="Email"
              type="email"
              name="email"
              placeholder="test@test.com"
              register={register}
              errors={errors.identifier}
            />
            <InputField
              label="Prénom"
              type="text"
              name="firstname"
              placeholder="John"
              register={register}
              errors={errors.firstname}
            />
            <InputField
              label="Nom"
              type="text"
              name="lastname"
              placeholder="Doe"
              register={register}
              errors={errors.lastname}
            />
            <InputField
              label="Mot de passe"
              type="password"
              name="password"
              placeholder="******"
              register={register}
              errors={errors.password}
            />
            <Button className=" -primary" type="submit">
              S'inscrire
            </Button>
            <Button className=" -secondary" url="/sign-in">
              Se connecter
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

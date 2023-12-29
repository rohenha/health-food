import { useMemo } from 'react'

import Button from '@components/atoms/Button'
import InputField from '@components/atoms/InputField'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { createRecipe } from '@libs/recipes'

import './New.scss'

const schema = yup
  .object({
    name: yup.string().required('Un nom doit être choisit'),
    type: yup.string().required('Vous devez sélectionner un type'),
    ingredients: yup
      .array()
      .min(1)
      .of(yup.string().required('Vous devez sélectionner un type')),
  })
  .required()

export default function New() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  })
  const errors = useMemo(() => {
    return formState.errors
  }, [formState.errors])

  const onSubmit = async (data) => {
    console.log(data)
    const recipeData = await createRecipe({
      title: data.name,
      nature: data.type,
      preparation_duration: 0,
    })

    if (recipeData.data.id) {
      console.log(recipeData)
      // recipe created
      reset()
    } else {
      // error
    }
  }

  return (
    <div className="t-new">
      <div className="row">
        <div className="column-16 offset-4 md-column-12 md-offset-6">
          <h1 className="-tupp -tbold">Nouvelle recette</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              label="Nom de la recette"
              type="text"
              name="name"
              register={register}
              errors={errors.name}
              placeholder="Gratin de pâtes"
            />
            <InputField
              label="Type de recette"
              type="select"
              name="type"
              register={register}
              errors={errors.type}
              options={[
                { value: 'breakfast', content: 'Petit déjeuner' },
                { value: 'starter', content: 'Entrée' },
                { value: 'dish', content: 'Plat' },
                { value: 'aperitif', content: 'Apéritif' },
              ]}
            />
            <InputField
              label="Ingrédients"
              type="checkbox"
              name="ingredients"
              register={register}
              errors={errors.ingredients}
              options={[
                { value: 'poireaux', content: 'Poireaux', name: 'poireaux' },
                { value: 'bread', content: 'Pain', name: 'bread' },
                { value: 'emmental', content: 'Emmental', name: 'emmental' },
              ]}
            />
            {/* <InputField
              label="Type de cuisine"
              type="radio"
              name="cooking"
              register={register}
              errors={errors.cooking}
              options={[
                { value: 'four', content: 'Four', name: 'four' },
                { value: 'plaques', content: 'Plaques', name: 'plaques' },
              ]}
            /> */}
            <Button className=" -primary" type="submit">
              Créer la recette
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

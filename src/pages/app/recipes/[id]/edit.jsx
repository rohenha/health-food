import { useEffect, useState, useMemo, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import InputField from '@components/atoms/InputField'
import Button from '@components/atoms/Button'

import { findOneRecipe, removeRecipe, updateRecipe } from '@libs/recipes'

const schema = yup
  .object({
    name: yup.string().required('Un nom doit être choisit'),
    type: yup.string().required('Vous devez sélectionner un type'),
  })
  .required()

export default function EditRecipe() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  })
  const errors = useMemo(() => {
    return formState.errors
  }, [formState.errors])
  const [recipe, setRecipe] = useState({ id: 0, attributes: {} })

  const getRecipe = useCallback(async () => {
    const recipeData = await findOneRecipe(id)
    setRecipe(recipeData)
    setValue('name', recipeData.attributes.title)
    setValue('type', recipeData.attributes.nature)
  }, [setValue, setRecipe, id])

  const onRemoveRecipe = useCallback(async () => {
    await removeRecipe(id)
    // recipe removed
    return navigate('/app/recipes')
  }, [])

  useEffect(() => {
    getRecipe()
  }, [])

  const onEdit = async (data) => {
    console.log(data)
    const recipeData = await updateRecipe(recipe.id, {
      title: data.name,
      nature: data.type,
      preparation_duration: 0,
    })

    if (recipeData.data.id) {
      setRecipe(recipeData.data)
      // recipe update
    } else {
      // error
    }
  }

  return (
    <div className="t-recipeEdit">
      <div className="row">
        <div className="column-16 offset-4 md-column-12 md-offset-6">
          <h1>Edit Recipe: {recipe.attributes.title}</h1>
          <form onSubmit={handleSubmit(onEdit)}>
            <InputField
              label="Nom de la recette"
              type="text"
              name="name"
              placeholder="Gratin de pâtes"
              register={register}
              errors={errors.name}
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
            <Button className=" -primary" type="submit">
              Mettre à jour la recette
            </Button>
          </form>
          <Button url={`/app/recipes/${recipe.id}`}>
            Retour sur la recette
          </Button>
          <Button onClick={onRemoveRecipe}>Supprimer la recette</Button>
        </div>
      </div>
    </div>
  )
}

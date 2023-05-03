import { useEffect, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import InputField from '@components/atoms/InputField'
import Button from '@components/atoms/Button'

import { findOneRecipe, removeRecipe, updateRecipe } from '@libs/recipes'
import InputReducer from '@hooks/InputReducer'
import useToasts from '@hooks/Toasts'

export default function EditRecipe() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { pushToast } = useToasts()
  const [recipe, setRecipe] = useState({ id: 0, attributes: {} })
  const [form, formDispatch] = InputReducer({
    name: '',
    type: '',
  })

  const getRecipe = useCallback(async () => {
    const recipeData = await findOneRecipe(id)
    setRecipe(recipeData)
    formDispatch({
      state: {
        name: recipeData.attributes.title,
        type: recipeData.attributes.nature,
      },
      type: 'set',
    })
  }, [])

  const onRemoveRecipe = useCallback(async () => {
    await removeRecipe(id)
    pushToast({
      title: '',
      content: 'La recette a bien été supprimée',
      state: 'success',
    })
    return navigate('/recipes')
  }, [])

  useEffect(() => {
    getRecipe()
  }, [])

  const handleChange = useCallback((event) => {
    formDispatch({ target: event.target, type: 'update' })
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = await updateRecipe(recipe.id, {
      title: form.name,
      nature: form.type,
      preparation_duration: 0,
    })

    if (data.data.id) {
      setRecipe(data.data)
      pushToast({
        title: '',
        content: 'La recette a bien été mise à jour',
        state: 'success',
      })
    } else {
      pushToast({
        title: '',
        content: "Un problème s'est produit, veuillez réessayer",
        state: 'error',
      })
    }
  }

  return (
    <div className="t-recipeEdit">
      <div className="row">
        <div className="column-16 offset-4 md-column-12 md-offset-6">
          <h1>Edit Recipe: {recipe.attributes.title}</h1>
          <form action="" onSubmit={handleSubmit}>
            <InputField
              label="Nom de la recette"
              type="text"
              name="name"
              placeholder="Gratin de pâtes"
              value={form.name}
              required={true}
              onChange={handleChange}
            />
            <InputField
              label="Type de recette"
              type="select"
              name="type"
              value={form.type}
              onChange={handleChange}
              required={true}
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

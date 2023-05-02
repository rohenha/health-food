import { useEffect, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Default from '@components/layouts/Default'
import Button from '@components/atoms/Button'

import { findOneRecipe, removeRecipe } from '@libs/recipes'
import useToasts from '@hooks/Toasts'

export default function Recipe() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { pushToast } = useToasts()
  const [recipe, setRecipe] = useState({ id: 0, attributes: {} })

  const getRecipe = useCallback(async () => {
    const recipeData = await findOneRecipe(id)
    setRecipe(recipeData)
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

  return (
    <Default>
      <h1>Recipe: {recipe.attributes.title}</h1>
      <ul>
        <li>Titre :{recipe.attributes.title}</li>
        <li>Nature :{recipe.attributes.nature}</li>
        <li>
          Temps de préparation :{recipe.attributes.preparation_duration} min
        </li>
      </ul>
      <Button url={`/recipes/${recipe.id}/edit`}>Editer la recette</Button>
      <Button onClick={onRemoveRecipe}>Supprimer la recette</Button>
    </Default>
  )
}

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Default from '@components/layouts/Default'

export default function Recipe() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState({ id: 0, attributes: {} })
  const getRecipe = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/api/recettes/${id}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
        },
      }
    )

    const data = await response.json()
    setRecipe(data.data)
  }

  useEffect(() => {
    getRecipe()
  }, [])
  return (
    <Default>
      <h1>Recipe: {recipe.attributes.title}</h1>
    </Default>
  )
}

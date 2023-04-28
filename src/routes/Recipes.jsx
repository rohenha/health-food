import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Default from '@components/layouts/Default'

export default function Recipes() {
  const page = 1
  const [recipes, setRecipes] = useState([])
  const getRecipes = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/api/recettes`,
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
    setRecipes(data.data)
  }

  useEffect(() => {
    getRecipes()
  }, [page])

  return (
    <Default>
      <div className="row">
        <div className="column-16 offset-4 md-column-12 md-offset-6">
          <h1 className="-tupp -tbold">Recettes</h1>
          <ul>
            {recipes.map((recipe) => (
              <li key={`r${recipe.id}`}>
                <Link to={`/recipes/${recipe.id}`}>
                  {recipe.attributes.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Default>
  )
}

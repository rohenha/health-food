import { memo } from 'react'
import { Link } from 'react-router-dom'

import './RecipeCard.scss'

const RecipeCard = function ({ recipe }) {
  return (
    <article className="m-recipeCard">
      <Link to={`/app/recipes/${recipe.id}`} className="a-h4">
        {recipe.attributes.title}
      </Link>
    </article>
  )
}

const RecipeCardMemo = memo(RecipeCard)
export default RecipeCardMemo

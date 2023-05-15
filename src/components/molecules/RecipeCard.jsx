import { memo } from 'react'
import { Link } from 'react-router-dom'

import './RecipeCard.scss'

const RecipeCard = ({ recipe }) => {
  return (
    <article className="m-recipeCard">
      <Link to={`/app/recipes/${recipe.id}`} className="a-h4">
        {recipe.attributes.title}
      </Link>
    </article>
  )
}

const areEqual = (prevProps, nextProps) => {
  return prevProps.recipe.id === nextProps.recipe.id
}

const RecipeCardMemo = memo(RecipeCard, areEqual)
export default RecipeCardMemo

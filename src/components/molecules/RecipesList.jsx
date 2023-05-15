import { memo } from 'react'

import RecipeCard from '@components/molecules/RecipeCard'

const RecipesList = ({ recipes }) => {
  return (
    <ul className="t-recipes__list">
      {recipes.map((recipe) => (
        <li key={`r${recipe.id}`}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  )
}

const areEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps.recipes) === JSON.stringify(nextProps.recipes)
}

const RecipesListMemo = memo(RecipesList, areEqual)
export default RecipesListMemo

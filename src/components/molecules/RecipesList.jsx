import RecipeCard from '@components/molecules/RecipeCard'

export default function RecipesList({ recipes }) {
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

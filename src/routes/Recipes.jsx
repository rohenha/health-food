import { useLayoutEffect, useMemo, useContext } from 'react'

import RecipesList from '@components/molecules/RecipesList'
import RecipesSearch from '@components/molecules/RecipesSearch'
import Pagination from '@components/organisms/Pagination'

import useRecipes from '@hooks/Recipes'
import { AuthContext } from '@contexts/AuthContext'
import { debounce } from '@libs/utils'

import './Recipes.scss'

export default function Recipes() {
  const { user } = useContext(AuthContext)
  const [recipes, pagination, updateSearch, updatePage, updateRecipes] =
    useRecipes(user.token)
  console.log('render recipes')

  const debouncedChangeHandler = useMemo(() => {
    return debounce(updateSearch, 300)
  }, [updateSearch])

  useLayoutEffect(() => {
    updateRecipes()
    console.log('get recipes')
  }, [updateRecipes])

  return (
    <div className="t-recipes">
      <div className="row">
        <div className="column-16 offset-4 md-column-12 md-offset-6">
          <h1 className="-tupp -tbold">Recettes</h1>
          <RecipesSearch onChange={debouncedChangeHandler} />
          <p>Nombre de résultats : {pagination.total}</p>
          <RecipesList recipes={recipes} />
          <Pagination {...pagination} onPageChange={updatePage} />
        </div>
      </div>
    </div>
  )
}

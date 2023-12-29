import { useLayoutEffect, useMemo, useContext } from 'react'
import { useLoaderData } from 'react-router-dom'

import RecipesList from '@components/molecules/RecipesList'
import RecipesSearch from '@components/molecules/RecipesSearch'
import Pagination from '@components/organisms/Pagination'

import useRecipes from '@hooks/Recipes'
import { AuthContext } from '@contexts/AuthContext'
import { debounce } from '@libs/utils'

export const Loader = () => {
  return {
    test: 'hello world',
  }
}

export default function Recipes() {
  const data = useLoaderData()
  console.log(data)
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
      <h1 className="-tupp -tbold">Recettes</h1>
      <RecipesSearch onChange={debouncedChangeHandler} />
      <p>Nombre de résultats : {pagination.total}</p>
      <RecipesList recipes={recipes} />
      <Pagination {...pagination} onPageChange={updatePage} />
    </div>
  )
}

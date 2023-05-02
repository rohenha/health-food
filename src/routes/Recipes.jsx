import { useEffect, useState, useMemo, useCallback } from 'react'

import Default from '@components/layouts/Default'
import RecipesList from '@components/molecules/RecipesList'
import RecipesSearch from '@components/molecules/RecipesSearch'
import Pagination from '@components/organisms/Pagination'

import { searchRecipes } from '@libs/recipes'
import { debounce } from '@libs/utils'

import './Recipes.scss'

export default function Recipes() {
  const [page, setPage] = useState()
  const [search, setSearch] = useState({
    name: '',
  })
  const [recipes, setRecipes] = useState({
    data: [],
    pagination: { page: 1, pageCount: 1, pageSize: 10, total: 1 },
  })

  const updatePage = useCallback((index) => {
    setPage(index)
  }, [])

  const debouncedChangeHandler = useMemo(() => {
    return debounce((args) => {
      setSearch(args)
      setPage(1)
    }, 300)
  }, [])

  useEffect(() => {
    const getRecipes = async () => {
      const recipesData = await searchRecipes(search, page)
      setRecipes({
        data: recipesData.data,
        pagination: recipesData.meta.pagination,
      })
    }

    getRecipes()
  }, [page, search])

  return (
    <Default className="t-recipes">
      <div className="row">
        <div className="column-16 offset-4 md-column-12 md-offset-6">
          <h1 className="-tupp -tbold">Recettes</h1>
          <RecipesSearch onChange={debouncedChangeHandler} />
          <p>Nombre de résultats : {recipes.pagination.total}</p>
          <RecipesList recipes={recipes.data} />
          <Pagination
            page={recipes.pagination.page}
            count={recipes.pagination.pageCount}
            onPageChange={updatePage}
          />
        </div>
      </div>
    </Default>
  )
}

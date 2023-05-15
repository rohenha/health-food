import { useState, useMemo, useRef } from 'react'

import { searchRecipes } from '@libs/recipes'

export default function useRecipes(userToken) {
  const page = useRef(1)
  const token = useRef(userToken)
  const search = useRef({
    name: '',
  })
  const pagination = useRef({ page: 1, pageCount: 1, pageSize: 10, total: 1 })
  const [recipes, setRecipes] = useState([])

  const updateRecipes = useMemo(() => {
    return async () => {
      const recipesData = await searchRecipes(
        search.current,
        page.current,
        token.current
      )
      setRecipes(recipesData.data)
      pagination.current = recipesData.meta.pagination
    }
  }, [setRecipes, token])

  const updateSearch = useMemo(() => {
    return async (args) => {
      search.current = args
      page.current = 1
      await updateRecipes()
    }
  }, [updateRecipes])

  const updatePage = useMemo(() => {
    return async (index) => {
      page.current = index
      await updateRecipes()
    }
  }, [updateRecipes])

  return [recipes, pagination.current, updateSearch, updatePage, updateRecipes]
}

import { useState } from 'react'
import { useLoaderData, useSearchParams} from 'react-router-dom'
import { Pagination } from 'antd'

import RecipesList from '@components/molecules/RecipesList'
import RecipesSearch from '@components/molecules/RecipesSearch'
import Hero from '@components/organisms/Hero'

import { searchRecipes } from '@libs/recipes'
import { user, isLoggedIn} from '@store/auth'

export const Loader = async ({ request }) => {
  if (!isLoggedIn.value) {
    return {
      recipes: [],
      pagination: {}
    }
  }
  const url = new URL(request.url);
  const params = {}
  url.searchParams.forEach((value, key) => {
    params[key] = value
  });
  const page = params.page || 1
  const recipesData = await searchRecipes(params, page, user.value)
  console.log(params);
  return {
    recipes: recipesData.data,
    pagination: recipesData.meta.pagination,
  }
}

export default function Recipes() {
  let [searchParams] = useSearchParams();
  const { recipes, pagination } = useLoaderData()
  const [current, setCurrent] = useState(Number(searchParams.get('page') || 1));

  console.log(recipes, pagination)

  const onChange = (page) => {
    console.log('on change', page);
    setCurrent(page);
  }

  return (
    <div className="t-recipes">
      <Hero
        title="Mes recettes"
        subtitle="Voir mes recettes enregistrées et créées"
      />
      <RecipesSearch page={current} onChange={() => {
        setCurrent(1)
      }}/>
      <p>Nombre de résultats : {pagination.total}</p>
      <RecipesList recipes={recipes} />
      <Pagination current={current} onChange={onChange} total={pagination.total} pageSize={pagination.pageSize} itemRender={(page) => <p>{page}</p>}/>
    </div>
  )
}

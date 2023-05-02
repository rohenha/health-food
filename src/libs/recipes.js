export async function findRecipes(page = 1, params) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/recettes?pagination[page]=${page}${
      params ? `&${params}` : ''
    }`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
      },
    }
  )

  const json = await response.json()
  return json
}

export async function findOneRecipe(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/recettes/${id}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
      },
    }
  )

  const json = await response.json()
  return json.data
}

export async function removeRecipe(id) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/recettes/${id}`,
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
      },
    }
  )
  const json = await response.json()
  return json.data
}

export async function createRecipe(data) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/recettes`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
      },
      body: JSON.stringify({
        data: data,
      }),
    }
  )

  const recipeData = await response.json()
  return recipeData
}

export async function updateRecipe(id, data) {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/recettes/${id}`,
    {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
      },
      body: JSON.stringify({
        data: data,
      }),
    }
  )

  const recipeData = await response.json()
  return recipeData
}

export async function searchRecipes(search, page) {
  let attributes =
    'pagination[pageSize]=10&pagination[withCount]=true&sort=title:asc'
  if (search.name !== '') {
    attributes += `&filters[title][$contains]=${search.name}`
  }
  const recipesData = await findRecipes(page, attributes)
  return recipesData
}

import { queryAPI, updateAPI } from './strapi'

// export async function findRecipes(page = 1, params, token) {
//   return await queryAPI({
//     url: `api/recettes?pagination[page]=${page}${params}`,
//     headers: { Authorization: `Bearer ${token}` },
//   })
// }

export async function findOneRecipe(id) {
  const response = await queryAPI({
    url: `api/recettes/${id}?populate=*`,
    headers: { Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}` },
  })
  return response.data
}

export async function removeRecipe(id) {
  const response = await queryAPI({
    url: `api/recettes/${id}`,
    headers: { Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}` },
    method: 'DELETE',
  })

  return response.data
}

export async function createRecipe(data) {
  return await updateAPI({
    url: 'api/recettes',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
    },
    data: data,
  })
}

export async function updateRecipe(id, data) {
  return await updateAPI({
    url: `api/recettes/${id}`,
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
    },
    data: data,
  })
}

export async function searchRecipes(search, page, user) {
  let attributes =
  '&pagination[pageSize]=10&pagination[withCount]=true&sort=title:asc'

  if (search.name) {
    attributes += `&filters[title][$contains]=${search.name}`
  }
  if (search.difficulty) {
    attributes += `&filters[difficulty][$eq]=${search.difficulty}`
  }
  if (search.price) {
    attributes += `&filters[price][$eq]=${search.price}`
  }
  const response = await queryAPI({
    url: `api/recettes?populate=*&pagination[page]=${page}${attributes}`,
    headers: { Authorization: `Bearer ${user.token}` },
  })
  return response
  // let attributes =
  //   '&pagination[pageSize]=10&pagination[withCount]=true&sort=title:asc'
  // if (search.name !== '') {
  //   attributes += `&filters[title][$contains]=${search.name}`
  // }
  // const recipesData = await findRecipes(page, attributes, token)
  // return recipesData
}

export async function searchMyRecipes(search, page, user) {
  let attributes =
    '&filters[author][id][$eq]=1&pagination[pageSize]=10&pagination[withCount]=true&sort=title:asc'

  if (search.name !== '') {
    attributes += `&filters[title][$contains]=${search.name}`
  }
  const response = await queryAPI({
    url: `api/recettes?populate=*&pagination[page]=${page}${attributes}`,
    headers: { Authorization: `Bearer ${user.token}` },
  })
  return response
}

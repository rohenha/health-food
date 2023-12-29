export const generatePlan = async (data) => {
  const response = await fetch(`${import.meta.env.VITE_STRAPI_URL}/api/plans`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
    },
    body: JSON.stringify({
      data: data,
    }),
  })

  // console.log(response)
  const recipeData = await response.json()
  return recipeData
}

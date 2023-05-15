export async function signIn(form) {
  const login = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/auth/local`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }
  )
  return await login.json()
}

export async function signUp(form) {
  console.log(form)
}

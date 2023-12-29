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

export async function queryAPI({ url, headers = {}, method = 'GET' }) {
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  const headersConfig = Object.assign(defaultHeaders, headers)
  const response = await fetch(`${import.meta.env.VITE_STRAPI_URL}/${url}`, {
    method,
    headers: headersConfig,
  })
  const json = await response.json()
  return json
}

export async function updateAPI({
  url,
  headers = {},
  method = 'POST',
  data = {},
}) {
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  const headersConfig = Object.assign(defaultHeaders, headers)
  const response = await fetch(`${import.meta.env.VITE_STRAPI_URL}/${url}`, {
    method,
    headers: headersConfig,
    body: JSON.stringify({
      data: data,
    }),
  })
  const json = await response.json()
  return json.data
}

export async function signUp(form) {
  console.log(form)
}

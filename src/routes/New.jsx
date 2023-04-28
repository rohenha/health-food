import Default from '@components/layouts/Default'
import Button from '@components/atoms/Button'
import InputField from '@components/atoms/InputField'

import { useState } from 'react'

import './New.scss'

export default function New() {
  const [form, setForm] = useState({
    name: '',
    type: '',
    ingredients: [],
  })

  const handleChange = (event) => {
    const { target } = event
    const { name, type } = target
    let value = type === 'radio' ? target.value : target.value
    if (type === 'checkbox') {
      const array = form[name]
      console.log(array)
      console.log(value)
      console.log(target.checked)
      if (target.checked) {
        value = form[name].push(value)
      } else {
        const index = array.indexOf(value)
        value = array.splice(index, 1)
      }
      console.log(value)
    }
    setForm({
      ...form,
      [name]: value,
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(form)
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
          data: {
            title: form.name,
            nature: form.type,
            preparation_duration: 0,
          },
        }),
      }
    )

    const data = await response.json()
    console.log(data)

    setForm({
      name: '',
      type: '',
      ingredients: [],
    })
  }

  return (
    <Default className="t-new">
      <div className="row">
        <div className="column-16 offset-4 md-column-12 md-offset-6">
          <h1 className="-tupp -tbold">Nouvelle recette</h1>
          <form action="" onSubmit={handleSubmit}>
            <InputField
              label="Nom de la recette"
              type="text"
              name="name"
              placeholder="Gratin de pâtes"
              value={form.name}
              required={true}
              onChange={handleChange}
            />
            <InputField
              label="Type de recette"
              type="select"
              name="type"
              value={form.type}
              onChange={handleChange}
              required={true}
              options={[
                { value: 'breakfast', content: 'Petit déjeuner' },
                { value: 'starter', content: 'Entrée' },
                { value: 'dish', content: 'Plat' },
                { value: 'aperitif', content: 'Apéritif' },
              ]}
            />
            {/* <InputField
              label="Ingrédients"
              type="checkbox"
              name="ingredients"
              value={form.ingredients}
              onChange={handleChange}
              options={[
                { value: 'poireaux', content: 'Poireaux', name: 'poireaux' },
                { value: 'bread', content: 'Pain', name: 'bread' },
                { value: 'emmental', content: 'Emmental', name: 'emmental' },
              ]}
            /> */}
            {/* <InputField
              label="Type de cuisine"
              type="radio"
              name="cooking"
              value={form.cooking}
              onChange={handleChange}
              options={[
                { value: 'four', content: 'Four', name: 'four' },
                { value: 'plaques', content: 'Plaques', name: 'plaques' },
              ]}
            /> */}
            <Button className=" -primary" type="submit">
              Créer la recette
            </Button>
          </form>
        </div>
      </div>
    </Default>
  )
}

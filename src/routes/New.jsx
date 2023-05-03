import { useCallback } from 'react'

import Button from '@components/atoms/Button'
import InputField from '@components/atoms/InputField'

import { createRecipe } from '@libs/recipes'
import InputReducer from '@hooks/InputReducer'
import useToasts from '@hooks/Toasts'

import './New.scss'

export default function New() {
  const { pushToast } = useToasts()
  const [form, formDispatch] = InputReducer({
    name: '',
    type: '',
  })

  const handleChange = useCallback((event) => {
    formDispatch({ target: event.target, type: 'update' })
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = await createRecipe({
      title: form.name,
      nature: form.type,
      preparation_duration: 0,
    })

    if (data.data.id) {
      console.log(data)
      formDispatch({ type: 'reset' })
      pushToast({
        title: '',
        content: 'La recette a bien été créée',
        state: 'success',
      })
    } else {
      pushToast({
        title: '',
        content: "Un problème s'est produit, veuillez réessayer",
        state: 'error',
      })
    }
  }

  return (
    <div className="t-new">
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
    </div>
  )
}

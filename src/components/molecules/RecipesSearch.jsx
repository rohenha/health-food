import { useState, useEffect, useRef } from 'react'

import InputField from '@components/atoms/InputField'

export default function RecipesSearch({ onChange }) {
  let initialized = useRef(false)
  const [search, setSearch] = useState({
    name: '',
  })

  const handleChange = (event) => {
    const { target } = event
    const { name, type } = target
    let value = type === 'radio' ? target.value : target.value
    if (type === 'checkbox') {
      const array = search[name]
      if (target.checked) {
        value = search[name].push(value)
      } else {
        const index = array.indexOf(value)
        value = array.splice(index, 1)
      }
    }
    setSearch({
      ...search,
      [name]: value,
    })
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      return
    }
    onChange(search)
  }, [search, onChange])

  return (
    <div>
      <InputField
        label="Nom de la recette"
        type="text"
        name="name"
        placeholder="Gratin de pâtes"
        value={search.name}
        required={true}
        onChange={handleChange}
      />
    </div>
  )
}

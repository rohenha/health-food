import { useMemo, memo } from 'react'
import { useForm } from 'react-hook-form'

import InputField from '@components/atoms/InputField'

const RecipesSearch = ({ onChange }) => {
  const { register, getValues } = useForm({
    mode: 'onTouched',
  })

  const handleChange = useMemo(() => {
    return () => {
      const data = getValues()
      onChange(data)
    }
  }, [onChange, getValues])

  console.log('render search')

  return (
    <div>
      <InputField
        label="Nom de la recette"
        type="text"
        name="name"
        placeholder="Gratin de pâtes"
        required={true}
        register={register}
        params={{ onChange: handleChange }}
      />
    </div>
  )
}

const RecipesSearchMemo = memo(RecipesSearch)
export default RecipesSearchMemo

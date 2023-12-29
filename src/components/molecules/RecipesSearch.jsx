import { useMemo, memo, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, useSubmit, useSearchParams } from 'react-router-dom'
import { Input, Radio } from 'antd'
import { FormItem } from "react-hook-form-antd"

import { debounce } from '@libs/utils'
import { difficulties, prices } from '@libs/variables'

const RecipesSearch = ({ onChange, page }) => {

  let [searchParams, setSearchParams] = useSearchParams();
  const [lazy, setLazy] = useState(false)
  const { register, control, getValues, setValue } = useForm({
    defaultValues: {
      name: searchParams.get('name') || '',
      difficulty: searchParams.get('difficulty') || '',
      price: searchParams.get('price') || '',
    },
    mode: 'onTouched',
  })

  useEffect(() => {
    if (lazy) {
      console.log('lazy');
      setSearchParams({
        ...getValues(),
        page: page,
      })
    } else {
      setLazy(true)
    }
  }, [page]);

  const handleChange = useMemo(() => {
    const debouncedChangeHandler = debounce((data) => {
      setSearchParams(data)
      if (typeof onChange === 'function') {
        onChange(data)
      }
    }, 450)

    return () => {
      const data = getValues()
      if (!data.name || data.name.length > 3 || data.name === '') {
        debouncedChangeHandler({...data , page: 1 })
      }
    }
  }, [onChange, getValues, setSearchParams])

  return (
    <Form layout="vertical">
        <FormItem control={control} name="name" label="Nom de la recette" onChange={handleChange}>
          <Input placeholder="Gratin de pâtes" required={false} />
        </FormItem>
        <FormItem control={control} name="difficulty" label="Difficulté" onChange={handleChange}>
          <Radio.Group>
            {difficulties.map((difficulty) => (
              <Radio.Button key={`diff-${difficulty.value}`} value={difficulty.value}>{difficulty.name}</Radio.Button>
            ))}
            {/* <Radio.Button value="easy">Facile</Radio.Button>
            <Radio.Button value="medium">Moyenne</Radio.Button>
            <Radio.Button value="hard">Difficilie</Radio.Button> */}
          </Radio.Group>
        </FormItem>
        <FormItem control={control} name="price" label="Prix" onChange={handleChange}>
          <Radio.Group>
            {prices.map((price) => (
              <Radio.Button key={`prices-${price.value}`} value={price.value}>{price.name}</Radio.Button>
            ))}
          </Radio.Group>
        </FormItem>
    </Form>
  )
}

const RecipesSearchMemo = memo(RecipesSearch)
export default RecipesSearchMemo

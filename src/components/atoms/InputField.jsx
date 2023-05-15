import { useMemo, memo } from 'react'
import { useFormState } from 'react-hook-form'

import './InputField.scss'

const InputField = ({
  label,
  className,
  type,
  name,
  placeholder,
  id,
  options,
  register,
  params = {},
  errors,
  // control,
  ...props
}) => {
  const inputClass = useMemo(
    () => (className ? `a-inputField${className}` : 'a-inputField'),
    [className]
  )

  // const { errors } = useFormState({
  //   control,
  //   name: name,
  //   exact: true,
  // })

  console.log('render input ' + name)

  const input = useMemo(() => {
    const renderInputDefault = () => {
      return (
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          {...props}
          {...register(name, params)}
        />
      )
    }

    const renderInputSelect = () => {
      return (
        <select id={name} {...props} {...register(name, params)}>
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.content}
            </option>
          ))}
        </select>
      )
    }

    const renderInputCheckbox = () => {
      return (
        <div>
          {options.map((option) => (
            <div key={option.value}>
              <label htmlFor={option.name}>{option.content}</label>
              <input
                value={option.value}
                type={type}
                id={option.name}
                {...props}
                {...register(name, params)}
              />
            </div>
          ))}
        </div>
      )
    }

    const renderInputRadio = () => {
      return (
        <div>
          {options.map((option) => (
            <div key={option.value}>
              <label htmlFor={option.name}>{option.content}</label>
              <input
                value={option.value}
                type={type}
                id={option.name}
                {...props}
                {...register(name, params)}
              />
            </div>
          ))}
        </div>
      )
    }

    switch (type) {
      case 'select':
        return renderInputSelect()
      case 'radio':
        return renderInputRadio()
      case 'checkbox':
        return renderInputCheckbox()
      default:
        return renderInputDefault()
    }
  }, [type, name, placeholder, id, props, options, register, params])

  return (
    <div className={inputClass}>
      {label &&
        (type === 'checkbox' || type === 'radio' ? (
          <legend className="a-labelText">{label}</legend>
        ) : (
          <label htmlFor={id} className="a-labelText">
            {label}
          </label>
        ))}
      {input}
      {errors && <span>{errors.message}</span>}
    </div>
  )
}

const InputFieldMemo = memo(InputField, (prevProps, nextProps) => {
  return prevProps.errors === nextProps.errors
})
export default InputFieldMemo

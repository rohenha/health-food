import { useMemo, memo } from 'react'

import './InputField.scss'

const InputField = ({
  label,
  className,
  type,
  name,
  placeholder,
  id,
  options,
  value,
  ...props
}) => {
  const inputClass = useMemo(
    () => (className ? `a-inputField${className}` : 'a-inputField'),
    [className]
  )

  const input = useMemo(() => {
    const renderInputDefault = () => {
      return (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          id={id}
          value={value}
          {...props}
        />
      )
    }

    const renderInputSelect = () => {
      return (
        <select name={name} id={name} value={value} {...props}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.content}
            </option>
          ))}
        </select>
      )
    }

    const renderInputCheckbox = () => {
      console.log('render checkbox')
      return (
        <div>
          {options.map((option) => (
            <div key={option.value}>
              <label htmlFor={option.name}>{option.content}</label>
              <input
                value={option.value}
                type={type}
                name={name}
                id={option.name}
                {...props}
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
                name={name}
                id={option.name}
                checked={value === option.value}
                {...props}
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
  }, [type, name, placeholder, id, props, options, value])

  return (
    <div className={inputClass}>
      {type === 'checkbox' || type === 'radio' ? (
        <legend className="a-labelText">{label}</legend>
      ) : (
        <label htmlFor={id} className="a-labelText">
          {label}
        </label>
      )}
      {input}
    </div>
  )
}

const InputFieldMemo = memo(InputField)
export default InputFieldMemo

import { useReducer } from 'react'

let defaultValue = {}

const setTextInput = (state, target) => {
  return {
    ...state,
    [target.name]: target.value,
  }
}

const updateInput = (state, action) => {
  const { target } = action
  switch (target.type) {
    case 'select-one':
      return setTextInput(state, target)

    default:
      return setTextInput(state, target)
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return defaultValue

    case 'set':
      return Object.assign(state, action.state)

    default:
      return updateInput(state, action)
  }
}

export default function InputReducer(initialValue) {
  defaultValue = initialValue
  return useReducer(reducer, initialValue)
}

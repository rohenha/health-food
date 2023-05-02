import { createContext, useRef } from 'react'
import Toasts from '@components/molecules/Toasts'

const defaultValue = {
  pushToastsRef: { current: () => {} },
}

export const ToastContext = createContext(defaultValue)

export function ToastContextProvider({ children }) {
  const pushToastsRef = useRef(defaultValue)

  return (
    <ToastContext.Provider value={{ pushToastsRef }}>
      <Toasts />
      {children}
    </ToastContext.Provider>
  )
}

import { useContext, useState } from 'react'
import Toast from '@components/atoms/Toast'

import { ToastContext } from '@contexts/ToastContext'

export default function Toasts() {
  const [toasts, setToasts] = useState([])
  const { pushToastsRef } = useContext(ToastContext)

  pushToastsRef.current = ({ duration, ...props }) => {
    const id = Date.now()
    const timer = setTimeout(() => {
      setToasts((v) => v.filter((t) => t.id !== id))
    }, (duration ?? 5) * 1000)
    const toast = { ...props, id, timer }
    setToasts((v) => [...v, toast])
  }
  const removeToast = (toast) => {
    clearTimeout(toast)
    setToasts((v) => v.filter((t) => t !== toast))
  }

  return (
    <>
      {toasts.map((toast, k) => (
        <Toast
          key={k}
          {...toast}
          onClick={() => {
            removeToast(toast)
          }}
        />
      ))}
    </>
  )
}

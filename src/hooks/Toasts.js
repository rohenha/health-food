import { useCallback, useContext } from 'react'

import { ToastContext } from '@contexts/ToastContext'

export default function useToasts() {
  const { pushToastsRef } = useContext(ToastContext)
  return {
    pushToast: useCallback(
      (toast) => {
        pushToastsRef.current(toast)
      },
      [pushToastsRef]
    ),
  }
}

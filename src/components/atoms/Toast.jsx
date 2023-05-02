import { useMemo } from 'react'

import './Toast.scss'

export default function Toast({ title, content, state = 'success', onClick }) {
  // const [entered, setEnter] = useState(false)
  const toastClass = useMemo(() => `a-toast -${state}`, [state])

  return (
    <div className={toastClass} onClick={onClick}>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  )
}

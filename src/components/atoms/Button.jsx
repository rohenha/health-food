import { Link } from 'react-router-dom'
import { useMemo, memo } from 'react'

import './Button.scss'

const Button = ({ children, url, className, ...props }) => {
  const btnClass = useMemo(
    () =>
      className ? `a-button a-buttonText${className}` : `a-button a-buttonText`,
    [className]
  )
  if (url) {
    return (
      <Link className={btnClass} to={url} {...props}>
        {children}
      </Link>
    )
  } else {
    return (
      <button className={btnClass} {...props}>
        {children}
      </button>
    )
  }
}

const ButtonMemo = memo(Button)
export default ButtonMemo

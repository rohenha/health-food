import { Link } from 'react-router-dom'
import { useMemo } from 'react'

import './Button.scss'

export default function Button({
  children,
  url,
  onClick,
  className,
  ...props
}) {
  const btnClass = useMemo(
    () => `a-button a-buttonText${className}`,
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
      <button className={btnClass} onClick={onClick} {...props}>
        {children}
      </button>
    )
  }
}

import { useContext } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

import Navbar from '@components/organisms/navbar'

import { AuthContext } from '@contexts/AuthContext'
import { nav } from '@libs/variables'

export default function ProtectedRoute({ children, className }) {
  const { token } = useContext(AuthContext)

  if (!token) {
    return <Navigate to="/" replace />
  }

  return (
    <div className={className}>
      {children}
      <Navbar nav={nav} />
    </div>
  )
}

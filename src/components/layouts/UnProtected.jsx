import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import { AuthContext } from '@contexts/AuthContext'

export default function Default() {
  const { user } = useContext(AuthContext)

  if (user) {
    return <Navigate to="/app" replace />
  }

  return <Outlet />
}

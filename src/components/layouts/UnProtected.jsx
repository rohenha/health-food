import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import { isLoggedIn } from '@store/auth'

export default function Default() {

  if (isLoggedIn.value) {
    return <Navigate to="/app" replace />
  }

  return <Outlet />
}

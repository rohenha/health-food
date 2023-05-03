import { useContext } from 'react'
import { useNavigate, Navigate, Outlet } from 'react-router-dom'

import Navbar from '@components/organisms/navbar'

import { ToastContextProvider } from '@contexts/ToastContext'
import { AuthContext } from '@contexts/AuthContext'
import { nav } from '@libs/variables'

export default function ProtectedRoute() {
  const { token } = useContext(AuthContext)

  // if (!token) {
  //   return <Navigate to="/" replace />
  // }
  console.log('init protected')

  return (
    <ToastContextProvider>
      <Outlet />
      <Navbar nav={nav} />
    </ToastContextProvider>
  )
}

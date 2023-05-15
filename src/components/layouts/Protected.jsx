import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import Navbar from '@components/organisms/navbar'

import { AuthContext } from '@contexts/AuthContext'
import { nav } from '@libs/variables'

export default function Protected() {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Navigate to="/sign-in" replace />
  }

  return (
    <>
      <Outlet />
      <Navbar nav={nav} />
    </>
  )
}
